//Static data arrays for outputs/simulated JSON response 
let locationsArr = [
  {
    name: 'Cork',
    coord: [51.8986, -8.4705],
    summary: 'Cork believes is the true capital of Ireland.',
    drilldown: [{
      poiName: 'National Monument',
      poiCoord: [51.8960, -8.4745],
      poiSummary: 'A national monument in Cork city.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Gallery Cafe',
      poiCoord: [51.8998, -8.4734],
      poiSummary: 'A cafe for lunch in Cork city.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Fitzgeralds Park',
      poiCoord: [51.8955, -8.4933],
      poiSummary: 'A large park in Cork city, includes a bike hire.',
      poiType: 'Outdoors'
    }]
  },
  {
    name: 'Galway',
    coord: [53.2841, -9.0378],
    summary: 'Galway is maybe the beste city in Ireland.',
    drilldown: [{
      poiName: 'The Kings Head',
      poiCoord: [53.2721, -9.0532],
      poiSummary: 'A fun pub in Galway which has the Kings head in it',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'The Spanish Arch',
      poiCoord: [53.2697, -9.0539],
      poiSummary: 'An old arch from Viking times',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Browne Doorway',
      poiCoord: [53.2747, -9.0496],
      poiSummary: 'Monument at Eyre Square park',
      poiType: 'Historic/Monument'
    }]
  },
  {
    name: 'Dublin',
    coord: [53.3497, -6.2602],
    summary: 'Dublin is the capital of Ireland.',
    drilldown: [{
      poiName: 'James Toner',
      poiCoord: [53.3377, -6.2524],
      poiSummary: 'One of the best pints of Guiness in Dublin.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Merrion Square Park',
      poiCoord: [53.3396, -6.2491],
      poiSummary: 'A lovely park in Dublin city.',
      poiType: 'Outdoors'
    },
    {
      poiName: 'Spire of Dublin',
      poiCoord: [53.3498, -6.2602],
      poiSummary: 'The Spire of Dublin is 200m tall.',
      poiType: 'Historic/Monument'
    }]
  },
  {
    name: 'Belfast',
    coord: [54.5964, -5.9302],
    summary: 'Belfast is the capital of Northern Ireland.',
    drilldown: [{
      poiName: 'Titanic Museum',
      poiCoord: [54.6080, -5.9100],
      poiSummary: 'Museum at the location where the Titanic was built.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Belfast City Hall',
      poiCoord: [54.5964, -5.9294],
      poiSummary: 'Historic city hall and surrounding garden with monuments.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'The Fountain Bar',
      poiCoord: [54.5986, -5.9314],
      poiSummary: 'A pub in Belfast city',
      poiType: 'Restaurant/Pub'
    }]
  },
  {
    name: 'Killarney',
    coord: [52.0595, -9.5053],
    summary: 'Killarney is the cutest town in Ireland.',
    drilldown: [{
      poiName: 'Killarney House',
      poiCoord: [52.0556, -9.5116],
      poiSummary: 'Historic house and gardens in Killarney National Park',
      poiType: 'Outdoors'
    },
    {
      poiName: 'OConnors Traditional Pub',
      poiCoord: [52.0598, -9.5093],
      poiSummary: 'A traditional pub in Killarney town.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Murphys Dingle Ice Cream',
      poiCoord: [52.0590, -9.5091],
      poiSummary: 'Local ice cream shop with premium ice cream.',
      poiType: 'Restaurant/Pub'
    }]
  },
  {
    name: 'Kilkenny',
    coord: [52.6510, -7.2484],
    summary: 'Those bastards! They Kilkenny!',
    drilldown: [{
      poiName: 'Kilkenny Castle',
      poiCoord: [52.6502, -7.2495],
      poiSummary: 'Historic castle and gardens in Kilkenny town.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Left Bank',
      poiCoord: [52.6504, -7.2514],
      poiSummary: 'Pub inside a converted historic bank building.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Rothe House & Garden',
      poiCoord: [52.6542, -7.2547],
      poiSummary: 'Restored 1594 house, garden and museum with timber ceiling.',
      poiType: 'Historic/Monument'
    }]
  },
  {
    name: 'Donegal',
    coord: [54.6543, -8.1098],
    summary: 'A town in County Donegal which means "fort of the foreigners" in Irish.  From the 15th to 17th century it was the "capital" of Tyrconnell, a Gaelic kingdom.',
    drilldown: [{
      poiName: 'The Diamond',
      poiCoord: [54.6538, -8.1106],
      poiSummary: 'Historic center of Donegal town, a hub for music, poetic and cultural gatherings.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Donegal Castle',
      poiCoord: [54.6550, -8.1106],
      poiSummary: 'The historic stronghold of the ODonnell family, now a Office of Public Works site.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'The Forge',
      poiCoord: [54.6554, -8.1124],
      poiSummary: 'A pub in Donegal town.',
      poiType: 'Restaurant/Pub'
    }]
  }
];

//Landing page default view upon arriving to the home page

function defaultView() {
  document.getElementById("controls").innerHTML = `
    <div>Welcome to the Map Generation Company called Mappy!</div>
    <br />
    <div>
      <p>We can do some fun things together, such as:</p>
      <ul>
        <li>Help you plan your next trip</li>
        <li>Show you interesting things to do on your trip</li>
        <li>Download your travel map to your computer to take with you!</li>
      </ul>
    </div>
    <br />
    <button onclick="mapLoader();">Start building your travel map now!</button>
  `;
  return;
}

//HTML content generation

//Loads preference selection form & HTML and default main map view 
function mapLoader() {
  document.getElementById("controls").innerHTML = `
  <div>
    <div>
      <label for="numStops">Desired number of cities:</label>
      <select id="numStops" name="numStops">
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </div>
    <button type="submit" onclick="generateTopMapCitiesResults(); return false;">Create your travel Map!</button>
  </div>
  `;

  document.getElementById("form-div").innerHTML = `
  <h2>Your Custom Ireland Travel Map:</h2>
  <br />
  <p>Please select your travel preferences to generate a new map.</p>
  <br />
  <div class="main-container">
    <div class="left-div">
      <div id="mapid"></div>
    </div>
    <br />
    <div class="right-div"></div>
  </div>
  `;
    
  let mymap = L.map('mapid').setView([53.2734, -7.7783], 7);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap);
}

//Randomize results based on inputs

//consumer user preference inputs to generate array of results, generates array index values to be used by generateCityList function below
function randomizer (locationsArr) {
  return Math.floor(Math.random() * locationsArr);
}

//function to select cities to add to the output array by using the randomizer results
function generateCityList () {
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

//Generate HTML content to return

//global variable needed to hold travel destinations content generated in the generateTopMapCitiesResults function, to be consumed by detailsViewContent function below
let printArr = [];  //TODO - clean this up once functions are split out
let mymap2;

//function to generate output html and populate it with map and city markers, as well as return city names and details based on user preferences input
function generateTopMapCitiesResults() {
  printArr = generateCityList();
  document.getElementById("form-div-2").innerHTML = ``; //clear drilldown panel if user clicks generate new map and a drilldown from a past map was already loaded.

  //loop to add each travel destination HTML to be included in results to user
  let locationsList = "";

  for (let i = 0; i < printArr.length; i++) {
    locationsList +=
    `<p><strong>${i + 1}. ${printArr[i].name}</strong>
    <br />
    ${printArr[i].summary}
    <br />
    <button onclick="generateDetailsDefaultLayout(${i}, 'allTypes');">Additional Details for ${printArr[i].name}</button>
    </p>
    <br />
    `;
  }
  generateTopMapAndCitiesLayout(locationsList);
} 

function generateTopMapAndCitiesLayout(locationsList) {
  //HTML content displayed after preference selections are made with map results
  document.getElementById("form-div").innerHTML = `
    <h2>Your Custom Ireland Travel Map:</h2>
      <br />
      <p>Please see your customized results below.</p>
      <br />
      <div class="main-container">
        <div class="left-div">
          <div id="mapid"></div>
        </div>
        <br />
        <div class="right-div">
          <h3>Your list of destinations for your trip:</h3>
          <br />
          <div>${locationsList}</div>
        </div>
      </div>
    `;

  //render map via mapbox API & leaflet library
  let mymap = L.map('mapid').setView([53.2734, -7.7783], 7);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap);

  //loop to add markers from array of coordinates (to be updated to be based on user inputs)
  let coordsGroup = [];

  for (let i = 0; i < printArr.length; i++) {
    L.marker(printArr[i].coord).addTo(mymap).bindPopup("This is the "+printArr[i].name+" marker");
    coordsGroup.push(printArr[i].coord);
  }

  //set the map to fit all POI markers in view upon rendering with padding and map/zoom animation
  mymap.flyToBounds(coordsGroup, {
    padding: L.point(36, 36),
    animate: true,
  });

}

function updateDetailsMapMarkers(filteredAttractions) {
    let coordsDrilldownGroup = [];

    // TODO reset markers

    //loop to add markers from array of drilldown coordinates based on user selection to be rendered on the map
    for (let i = 0; i < filteredAttractions.length; i++) { 
      L.marker(filteredAttractions[i].poiCoord).addTo(mymap2).bindPopup("This is the "+filteredAttractions[i].poiName+" marker");
      coordsDrilldownGroup.push(filteredAttractions[i].poiCoord);
    }

    console.log(coordsDrilldownGroup);
    console.log(mymap2);
  
    //set the map to include all POI markers from array above with padding and zoom/map animation
    mymap2.flyToBounds(coordsDrilldownGroup, {
      padding: L.point(36, 36), 
      animate: true,
    });
}

function generateFilteredAttractions(citySelectionIndex, tripType) {
  let citySelection = printArr[citySelectionIndex];
  let filteredSelection = citySelection.drilldown; 

  if (tripType !== "allTypes") {
    filteredSelection = citySelection.drilldown.filter((thingToDo) => {
      return thingToDo.poiType == tripType;
    });
  }

  return filteredSelection;
}

function generateDetailsDefaultLayout(citySelectionIndex) {
  let citySelection = printArr[citySelectionIndex];

  document.getElementById("form-div-2").innerHTML = `
    <h2>Detailed view of ${citySelection.name}:</h2>
    <br />
    <div class="main-container">
      <div class="left-div">
        <div id="mapid2"></div>
      </div>
      <br />
      <div class="right-div">
        <div>
          <label for="tripType">Type of trip desired:</label>
          <select id="tripType" name="tripType" onchange="filterDrilldown(${citySelectionIndex});">
            <option value="allTypes">All</option>
            <option value="Historic/Monument">Culture / History</option>
            <option value="Outdoors">Outdoors / Adventure</option>
            <option value="Restaurant/Pub">Dining / Nightlife</option>
          </select>
          <br />
        </div>
        <div id="drilldownDetails"> 
          <h3>Points of interest for ${citySelection.name}:</h3>
          <br />
          <div id="poi-list"></div>
        </div>
      </div>
    </div>
  `;

  //render drilldown map and POI markers using mapbox API and leaflet library
  mymap2 = L.map('mapid2').setView(citySelection.coord, 9);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap2);

  let filteredAttractions = generateFilteredAttractions(citySelectionIndex, 'allTypes');
  updateDetailsViewContent(filteredAttractions);
  createDrilldownControls();
}

//create drilldown view content, pass in index of the city from the selection
function updateDetailsViewContent(filteredAttractions) {
  let poiList = "";

  for (let i = 0; i < filteredAttractions.length; i++) {
    poiList +=
    `<p><strong>${i + 1}. ${filteredAttractions[i].poiName}</strong>
    <br />
    <p>Summary: ${filteredAttractions[i].poiSummary}</p>
    <br />
    <p>Type of attraction: ${filteredAttractions[i].poiType}</p>
    </p>
    <br />
    `;
  }

  // update map
  updateDetailsMapMarkers(filteredAttractions);

  // update poilist inner html
  document.getElementById("poi-list").innerHTML = poiList;
}

  function renderBottomMap (citySelection) {
  //render drilldown map and POI markers using mapbox API and leaflet library
  let mymap2 = L.map('mapid2').setView(citySelection.coord, 9);
  let filteredSelection = citySelection.drilldown;

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap2);

  //loop to add markers from array of drilldown coordinates based on user selection to be rendered on the map
  let coordsDrilldownGroup = [];

  for (let i = 0; i < filteredSelection.length; i++) { //TODO need to update array to new POI coords array
    L.marker(filteredSelection[i].poiCoord).addTo(mymap2).bindPopup("This is the "+filteredSelection[i].poiName+" marker");
    coordsDrilldownGroup.push(filteredSelection[i].poiCoord);//TODO need to create an array of drilldown POI coords?
  }

  //set the map to include all POI markers from array above with padding and zoom/map animation
  mymap2.flyToBounds(coordsDrilldownGroup, {
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

function clearDrilldown() {
  document.getElementById("form-div-2").innerHTML = ``;
}

function createDrilldownControls() {
  document.getElementById("controls-bottom").innerHTML = `
  <div>
    <button onclick="clearDrilldown(); return false;">Hide Detailed View</button>
    <button onclick="">Print Your Travel Map</button>
    <button onclick="">E-Mail Your Travel Map</button>
  </div>
  `;
}
