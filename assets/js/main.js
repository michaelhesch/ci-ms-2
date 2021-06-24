/*jshint esversion: 6 */ 

//Global Variables 

//Array to hold results to return, needs to be accessed by multiple functions
let cityList = []; 
//Lower drill-down section map, needs to be accessed by multiple functions
let bottomMap; 
//Mapbox API key, stored globally for easy maintenance
const apiKey = `pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA`;
//mapbox required attribution stored globally for easy maintenance
const mapAttribution = `Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`;
//fontMapper & locationsArr are returned via data.js

/**
 * Creates top map default view with no markers and adds map.
 * Adds map to DOM in div with css id of 'top-map-div'.
 */ 
function mapLoader() {
  
  let topMap = L.map('top-map-div', {scrollWheelZoom: false}).setView([53.2734, -7.7783], 7);

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${apiKey}`, {
    attribution: `${mapAttribution}`,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(topMap);
}

/**
 * Generates random number between 0 and numOfLocations. 
 * @param numOfLocations as number of total cities in dataset.
 * @returns random number between 0 and numOfLocations.
 */
function randomizer(numOfLocations) {
  return Math.floor(Math.random() * numOfLocations);
}

/**
 * Generate city list array based on randomly selected unique index values.
 * While the cities array length is less than the number of stops selected by user:
 * 1. Generate random number from randomizer()
 * 2. Retrieve city from array at randomizer() return index
 * 3. Check if city already exists in cities array, if it does not, add it. 
 *    If it does, continue in loop to find next city. 
 * @returns array of city objects
 */
function generateCityList() {
  let citiesArr = [];
  let numStops = document.getElementById("numStops").value;

  //While loop used to add random values which correspond to the index of an item in the data array.  
  //If checks for duplicates in the array of index values to prevent duplicate city results from being displayed.
  while (citiesArr.length < numStops) { 
    let randomResult = locationsArr[randomizer(locationsArr.length)];
    if (!citiesArr.includes(randomResult)) {
      citiesArr.push(randomResult);  
    }
  }
  return citiesArr;
}

/**
 * Generates HTML template literal of all city names from generateCityList() and corresponding details.
 * Loops through cityList length to append the name, summary and HTML elements to string called locationsList.
 * Call generateTopMapAndCitiesLayout() function, passing locationsList as parameter.
 */
function generateTopMapCitiesResults() {
  //assigns pritArr to be the array of city data returned by generateCityList function above
  cityList = generateCityList();
  //clear drilldown panel if user clicks generate new map and a drilldown from a past map was already loaded
  clearDrilldown(); 

  //loop to create HTML output for each travel destination to be included in results to user, appends to object locationsList
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

/**
 * Generate map with markers and string text based on locationsList.
 * Set innerHTML of 'top-map-comment', 'city-div' based on locationsList.
 * Refresh/override map content container in 'top-map-div'.
 * Set view to Ireland coordinates for inital map render.
 * Loop through cityList array to find each city's location markers and add to map.
 * @param locationsList string of HTML template literal to be added to DOM
 */
function generateTopMapAndCitiesLayout(locationsList) {
  //HTML content displayed after preference selections are made with map results
  document.getElementById("top-map-comment").innerHTML = `Please see your customized results below.`;
  document.getElementById("city-div").innerHTML = `
    <h4>Destinations selected for your trip:</h4>
    <div id="city-div-content" class="row">
      <div class="col">${locationsList}</div>
    </div>
  `;
  //refresh map content after container has been initialized 
  //https://stackoverflow.com/questions/19186428/refresh-leaflet-map-map-container-is-already-initialized
  if (L.DomUtil.get('top-map-div') !== undefined) { 
    L.DomUtil.get('top-map-div')._leaflet_id = null; 
  }

  //define map and add map tile layer
  let topMap = L.map('top-map-div', {scrollWheelZoom: false}).setView([53.2734, -7.7783], 7);

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${apiKey}`, {
    attribution: `${mapAttribution}`,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(topMap);

  //loop to add markers from array of coordinates
  //coordsGroup array is the output needed by Leaflet to generate map markers
  let coordsGroup = [];

  for (let i = 0; i < cityList.length; i++) {
    L.marker(cityList[i].coord).addTo(topMap).bindPopup("This is the location of "+cityList[i].name+".");
    coordsGroup.push(cityList[i].coord);
  }
  //set the map to fit all POI markers in view upon rendering with padding and map/zoom animation
  topMap.flyToBounds(coordsGroup, {
    padding: L.point(36, 36),
    animate: true,
  });
}

/**
 * Generates filtered attractions for a particular city and trip type.
 * Finds the citySelection in cityList based on the citySelectionIndex.
 * Setting default value of filteredSelection to be all content inside citySelection drilldown array
 * If the tripType is anything other than all, filter drilldown results return only those matching selected trip type.
 * @param citySelectionIndex as number of selected city.
 * @param tripType string as selected points of interest category.
 * @returns array of all filtered selections based on trip type.
 */
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

/**
 * Generates bottom details panel based on selected city from top panel.
 * Finds the citySelection in cityList based on the citySelectionIndex.
 * Setting innerHTML for 'form-div-2' with selected city information & HTML elements.
 * Set view to selected city coordinates for inital map render.
 * Retrieve filteredAttractions based on the selected city & the default selection of 'All' in dropdown.
 * Calls updateDetailsViewContent() to populate the filtered attractions appended list to HTML.
 * Calls createDrilldownControls() to create 'Hide Detailed View' button.
 * @param citySelectionIndex as number of selected city. 
 */
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

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${apiKey}`, {
      attribution: `${mapAttribution}`,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
  }).addTo(bottomMap);

  //sets filteredAttractions variable to the result of generateFitleredAttractions based on user selection
  //by default this result will include all POI data, which can then be filtered by the user
  let filteredAttractions = generateFilteredAttractions(citySelectionIndex, 'allTypes');
  //creates the HTML and map markers based on the filteredAttractions data above
  updateDetailsViewContent(filteredAttractions);
  //renders the hide drilldown and print buttons in the controls-bottom container
  createDrilldownControls();
}

/**
 * Generates bottom panel map markers and sets the map zoom to the filteredAttractions coordinates.
 * Loop through filteredAttractions array and append marker to map for each filteredAttraction with coordinates & tooltip.
 * Append coordinates to array of arrays to set the map zoom to fit the markers.
 * @param filteredAttractions array of selected city objects.
 */
function updateDetailsMapMarkers(filteredAttractions) {
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

/**
 * Appending HTML elements for each filtered attraction to string.
 * Loop through each filteredAttraction, find the corresponding fontAwesome icon, append results to poiList string.
 * Update map markers based on filteredAttractions, set innerHTML to poiList string.
 * @param filteredAttractions array of selected city objects. 
 */
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

/**
 * Update points of interest for the selected city based on the user's selection from dropdown.
 * Gets dropdown selection as typeOfTrip, passes citySelectionIndex and typeOfTrip to generateFilteredAttractions().
 * Gets results from generateFilteredAttractions() as filteredAttractions, passes that into updateDetailsViewContent() 
 * to update the HTML elements based on selected points of interest.
 * @param citySelectionIndex as number of selected city.
 */
function filterDrilldown(citySelectionIndex) {
  let typeOfTrip =  document.getElementById("tripType").value;
  let filteredAttractions = generateFilteredAttractions(citySelectionIndex, typeOfTrip);
  updateDetailsViewContent(filteredAttractions);
}

/**
 * Clears HTML for 'form-div-2' and 'controls-bottom', which resets content for drilldown panel.
 */
function clearDrilldown() {
  document.getElementById("form-div-2").innerHTML = ``;
  document.getElementById("controls-bottom").innerHTML = ``;
}

//function to create the control button for the lower drill-down container
/**
 * Creates button to clear drilldown contents. This function is called from generateDetailsDefaultLayout()
 * and is only visible when there are contents in drilldown.
 */
function createDrilldownControls() {
  document.getElementById("controls-bottom").innerHTML = `
    <div class="col text-center align-items-center">
      <button class="map-button" onclick="clearDrilldown(); return false;">Hide Detailed View</button>
    </div>
  `;
}
