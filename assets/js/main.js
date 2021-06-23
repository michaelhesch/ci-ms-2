//Global Variables 
//needed to hold travel destinations content generated in the generateTopMapCitiesResults function, to be consumed by detailsViewContent function below
let cityList = []; //array to hold results to return 
let bottomMap; //lower drill-down section map, needs to be accessed by multiple functions
// fontMapper & locationsArr are returned via data.js

//Loads preference selection form for number of cities to visit, HTML layout and the default main map view 
function mapLoader() {
  
  let topMap = L.map('top-map-div', {scrollWheelZoom: false}).setView([53.2734, -7.7783], 7);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(topMap);
}

//Randomize results to return based on user number of cities input
//consumes user input to generate array of results
//generates array index values to be used by generateCityList function below
/**
 * Generate random number between 0 and numOfLocations.
 * @param numOfLocations as number
 * @returns random number
 */
function randomizer(numOfLocations) {
  return Math.floor(Math.random() * numOfLocations);
}

/**
 * Generate city list array based on randomly selected unique index values. 
 * @returns array of city objects
 */
//function to select cities to add to the output array by using the randomizer results
function generateCityList() {
  let citiesArr = [];
  let numStops = document.getElementById("numStops").value;

  //While loop used to add random values which correspond to the index of an item in the data array.  
  //If statement included to check for duplicates in the array of index values to prevent duplicate results from being displayed.
  while (citiesArr.length < numStops) { 
    let randomResult = locationsArr[randomizer(locationsArr.length)];
    if (!citiesArr.includes(randomResult)) {
      citiesArr.push(randomResult);  
    }
  }
  return citiesArr;
}

//Generate HTML content to display
//function to generate output html to return city names and corresponding details based on user input
function generateTopMapCitiesResults() {
  cityList = generateCityList(); //assigns pritArr to be the array of city data returned by generateCityList function above
  clearDrilldown(); //clear drilldown panel if user clicks generate new map and a drilldown from a past map was already loaded.

  //loop to create HTML output for each travel destination to be included in results to user
  let locationsList = "";

  for (let i = 0; i < cityList.length; i++) {
    locationsList +=
    `<h5>${i + 1}. ${cityList[i].name}</h5>
    <p>${cityList[i].summary}</p>
    <p>
      <button class="map-button" onclick="generateDetailsDefaultLayout(${i}, 'allTypes');">Additional Details for ${cityList[i].name}</button>
    </p>
    `;
  }
  generateTopMapAndCitiesLayout(locationsList);
} 

//function to render the upper map with markers for city results generated above.  Takes in the locationsList object from generateTopMapCitiesResults to display to user
function generateTopMapAndCitiesLayout(locationsList) {
  //HTML content displayed after preference selections are made with map results
  document.getElementById("top-map-comment").innerHTML = `Please see your customized results below.`;
  document.getElementById("city-div").innerHTML = `
    <h4>Destinations selected for your trip:</h4>
    <div id="city-div-content" class="row">${locationsList}</div>
  `;
  //refresh map content after container has been initialized 
  //https://stackoverflow.com/questions/19186428/refresh-leaflet-map-map-container-is-already-initialized
  if (L.DomUtil.get('top-map-div') !== undefined) { 
    L.DomUtil.get('top-map-div')._leaflet_id = null; 
  }

  let topMap = L.map('top-map-div', {scrollWheelZoom: false}).setView([53.2734, -7.7783], 7);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(topMap);

  //loop to add markers from array of coordinates, coordsGroup array is the output needed by Leaflet to generate map markers
  let coordsGroup = [];

  for (let i = 0; i < cityList.length; i++) {
    L.marker(cityList[i].coord).addTo(topMap).bindPopup("This is the location of "+cityList[i].name+".");
    //let coord = L.marker(cityList[i].coord).bindPopup("This is the location of "+cityList[i].name+".").addTo(cities);
    //coordsGroup.push(coord);
    coordsGroup.push(cityList[i].coord);
  }
  //set the map to fit all POI markers in view upon rendering with padding and map/zoom animation
  topMap.flyToBounds(coordsGroup, {
    padding: L.point(36, 36),
    animate: true,
  });
}

function generateFilteredAttractions(citySelectionIndex, tripType) {
  let citySelection = cityList[citySelectionIndex];
  let filteredSelection = citySelection.drilldown; 

  if (tripType !== "allTypes") {
    filteredSelection = citySelection.drilldown.filter((thingToDo) => {
      return thingToDo.poiType == tripType;
    });
  }

  return filteredSelection;
}

function generateDetailsDefaultLayout(citySelectionIndex) {
  let citySelection = cityList[citySelectionIndex];
  //update the bottom map container 'form-div-2' HTML based on user's city selection
  document.getElementById("form-div-2").innerHTML = `
    <h3>Detailed view of ${citySelection.name}:</h3>
      <div class="col-md-6">
        <div id="bottom-map-div"></div>
      </div>
      <div class="col-md-6" id="drilldownDetails">
        <label for="tripType"><h4>Points of interest for ${citySelection.name}: </h4></label>
        <select id="tripType" name="tripType" onchange="filterDrilldown(${citySelectionIndex});">
          <option value="allTypes">All</option>
          <option value="Historic/Monument">Historic / Monument</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Restaurant/Pub">Restaurant / Pub</option>
        </select>
        <div id="poi-list"></div>
      </div>
  `;
  //render drilldown map and POI markers using mapbox API and leaflet library
  bottomMap = L.map('bottom-map-div', {scrollWheelZoom: false}).setView(citySelection.coord, 10);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(bottomMap);

  //sets filteredAttractions variable to the result of generateFitleredAttractions based on user selection
  //by default this result will include all POI data, which can then be filtered by the user
  let filteredAttractions = generateFilteredAttractions(citySelectionIndex, 'allTypes');
  //creates the HTML and map markers based on the filteredAttractions data above
  updateDetailsViewContent(filteredAttractions);
  //renders the hide drilldown and print buttons in the controls-bottom container
  createDrilldownControls();
}

//function to add map markers to the bottom map 
function updateDetailsMapMarkers(filteredAttractions) {
  //let coordsDrilldownGroup = [];
  let bottomMapMarkers = [];
  //loop to add markers from array of drilldown coordinates based on user selection to be rendered on the map
  for (let i = 0; i < filteredAttractions.length; i++) { 
    L.marker(filteredAttractions[i].poiCoord).addTo(bottomMap).bindPopup("This is the location of "+filteredAttractions[i].poiName+".");
    bottomMapMarkers.push(filteredAttractions[i].poiCoord);
  }
  //set the map to include all POI markers from array above with padding and zoom/map animation
  bottomMap.flyToBounds(bottomMapMarkers, {
    padding: L.point(36, 36), 
    animate: true,
  });
}

//create drilldown view content, pass in index of the city from the selection
function updateDetailsViewContent(filteredAttractions) {
  let poiList = "";
  //loop to create filtered points of interest content for the drill-down pane
  for (let i = 0; i < filteredAttractions.length; i++) {
    //select the iconType HTML from the fontMapper object based on the poiType value
    let finalIcon = fontMapper[filteredAttractions[i].poiType];
    //create HTML with data corresponding to the selected POI type and icon
    poiList +=
    `<h6>${i + 1}. ${filteredAttractions[i].poiName} ${finalIcon}</h6>
      <p>Summary: ${filteredAttractions[i].poiSummary}</p>
      <p>Type of attraction: ${filteredAttractions[i].poiType}</p>
    `;
  }
  //Update map with new filtered data
  updateDetailsMapMarkers(filteredAttractions);
  //Update poi-list HTML to POIs generated by loop above
  document.getElementById("poi-list").innerHTML = poiList;
}

//render drilldown map and POI markers using mapbox API and leaflet library
function renderBottomMap (citySelection) {
  let bottomMap = L.map('bottom-map-div', {scrollWheelZoom: false}).setView(citySelection.coord, 10);
  let filteredSelection = citySelection.drilldown;

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(bottomMap);
  //loop to add markers from array of drilldown coordinates based on user selection to be rendered on the map
  for (let i = 0; i < filteredSelection.length; i++) {
    L.marker(filteredSelection[i].poiCoord).addTo(bottomMap).bindPopup("This is the location of "+filteredSelection[i].poiName+".");
    bottomMapMarkers.push(filteredSelection[i].poiCoord);
  }
  //set the map to include all POI markers from array above with padding and zoom/map animation
  bottomMap.flyToBounds(bottomMapMarkers, {
    padding: L.point(36, 36), 
    animate: true,
  });
}

//update the points of interest drill down div based on user's selection
function filterDrilldown(citySelectionIndex) {
  let typeOfTrip =  document.getElementById("tripType").value;
  let filteredAttractions = generateFilteredAttractions(citySelectionIndex, typeOfTrip);
  updateDetailsViewContent(filteredAttractions);
}

//function to clear the entire lower drill-down container & drill-down controls 
//result is to display only the top map & city data
function clearDrilldown() {
  document.getElementById("form-div-2").innerHTML = ``;
  document.getElementById("controls-bottom").innerHTML = ``;
}

//function to create the control buttons for the lower drill-down container and print 
function createDrilldownControls() {
  document.getElementById("controls-bottom").innerHTML = `
    <div class="col text-center align-items-center">
      <button class="map-button" onclick="clearDrilldown(); return false;">Hide Detailed View</button>
      <button class="map-button" onclick="">Print Your Travel Map</button>
    </div>
  `;
}
