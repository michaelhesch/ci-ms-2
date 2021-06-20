//Static data arrays for outputs/simulated JSON response 
let locationsArr = [
  {
    name: 'Cork',
    coord: [51.8986, -8.4705],
    summary: 'Cork is the second largest city in Ireland.  The city center is an island positioned between two channels of the river Lee.  Cork Harbor is one of the largest natural harbors in the world.',
    drilldown: [{
      poiName: 'National Monument',
      poiCoord: [51.8960, -8.4745],
      poiSummary: 'Early Irish Gothic national monument commemorating the rebellions, unveiled in 1906.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Crawford Gallery Cafe',
      poiCoord: [51.8998, -8.4734],
      poiSummary: 'A cafe for lunch in Cork city. Open Tuesday to Saturday from 9.00am to 4.00pm.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Fitzgeralds Park',
      poiCoord: [51.8955, -8.4933],
      poiSummary: 'Popular green space with a museum, fountain, sculptures, walking paths & manicured landscaping.  Includes the Cork Public Museum and a bike hire location.',
      poiType: 'Outdoors'
    }]
  },
  {
    name: 'Galway',
    coord: [53.2841, -9.0378],
    summary: 'Galway is a city in the west of Ireland, chartered in 1484, and is the sixth largest city in the country.  The city is known for hosting many festivals, celebrations and events including the Galway Arts Festival.',
    drilldown: [{
      poiName: 'The Kings Head',
      poiCoord: [53.2721, -9.0532],
      poiSummary: 'Relaxed bistro and pub hung with chic modern art, serving locally-sourced dishes with a global twist.  The building it is housed in is over 800 years old, from the 13th century.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'The Spanish Arch',
      poiCoord: [53.2697, -9.0539],
      poiSummary: 'Added to the 16th-century walls in the 18th century, this archway provides access to Spanish Parade.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Browne Doorway',
      poiCoord: [53.2747, -9.0496],
      poiSummary: 'Originally located on Lower Abbeygate Street but now standing at the north end of Eyre Square, was the doorway to the townhouse of the Browne family, one of the fourteen Tribes of Galway',
      poiType: 'Historic/Monument'
    }]
  },
  {
    name: 'Dublin',
    coord: [53.3497, -6.2602],
    summary: 'Dublin is the capital and the largest city in Ireland.  It was likely first settled by the Gaels during or before the 7th century and later by the Vikings.',
    drilldown: [{
      poiName: 'James Toner',
      poiCoord: [53.3377, -6.2524],
      poiSummary: 'Long-established, traditional pub with a dark wooden bar, picture-framed snug and popular beer yard.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Merrion Square Park',
      poiCoord: [53.3396, -6.2491],
      poiSummary: 'Leafy park with floral and heather gardens, playground and notable Oscar Wilde statue.',
      poiType: 'Outdoors'
    },
    {
      poiName: 'Spire of Dublin',
      poiCoord: [53.3498, -6.2602],
      poiSummary: 'Also called the "Monument of Light", it is a large, stainless steel, pin like monument that is 120 meters (390ft) tall located in North Dublin.',
      poiType: 'Historic/Monument'
    }]
  },
  {
    name: 'Belfast',
    coord: [54.5964, -5.9302],
    summary: 'Belfast is the capital and largest city of Northern Ireland.  Belfast was a major port city in by the early 19th century playing an important role in the industrial revolution, and was briefly the largest linen producer in the world.',
    drilldown: [{
      poiName: 'Titanic Museum',
      poiCoord: [54.6080, -5.9100],
      poiSummary: 'Museum at the location where the Titanic was built.  Hands-on displays, including dark ride, underwater exploration theatre and re-created decks/cabins.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Belfast City Hall',
      poiCoord: [54.5964, -5.9294],
      poiSummary: 'Historic city hall and surrounding garden.  In addition to city offices, this ornate 1906 building has a cafe, public art & a Titanic garden.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'The Fountain Bar',
      poiCoord: [54.5986, -5.9314],
      poiSummary: 'Casual bar with exposed ceiling beams, banquettes and upstairs grill restaurant, plus outside space.',
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
  <div class="row">
    <div class="col text-center">
      <h3>Welcome to the Ireland travel map service called Mappy!</h3>
      <br />
    </div>
      <div class="container mx-auto text-center">
        <p>We can do some fun things together, such as:</p>
        <div class="w-25 text-start mx-auto">
        <ul>
          <li>Create a randomized list of destinations with points of interest!</li>
          <li>Help you plan your next trip</li>
          <li>Show you interesting things to do on your trip</li>
          <li>Download your travel map to your computer to take with you!</li>
        </ul>
        </div>
      </div>
      <br />
    <div id="home-img"></div>
      <br />
    <div class="col text-center">
      <button type="button" onclick="mapLoader();">Build your map!</button>
    </div>
  </div>
  `;
  return;
}

//HTML content generation

//Loads preference selection form & HTML and default main map view 
function mapLoader() {
  document.getElementById("controls").innerHTML = `
    <div class="row text-center align-items-center">
      <div class="col text-end">
        <label for="numStops"><strong>Select the number of cities to visit:</strong></label>
        <select id="numStops" name="numStops">
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
        </select>
      </div>
      <div class="col text-start">
        <button type="submit" onclick="generateTopMapCitiesResults(); return false;">Create your travel Map!</button>
      </div>
    </div>
  `;

  document.getElementById("form-div").innerHTML = `
  <h3>Your Custom Ireland Travel Map:</h3>
  <p>Please select your travel preferences to generate a new map.</p>
  <div class="row">
    <div class="col">
      <div id="mapid"></div>
    </div>
    <br />
    <div class="col"></div>
  </div>
  `;
    
  let mymap = L.map('mapid', {scrollWheelZoom: false}).setView([53.2734, -7.7783], 7);

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
    <h3>Your Custom Ireland Travel Map:</h3>
      <p>Please see your customized results below.</p>
      <div class="row">
        <div class="col">
          <div id="mapid"></div>
        </div>
        <div class="col">
          <h4>Your list of destinations for your trip:</h4>
          <br />
          <div class="row">${locationsList}</div>
        </div>
      </div>
    `;

  //render map via mapbox API & leaflet library
  let mymap = L.map('mapid', {scrollWheelZoom: false}).setView([53.2734, -7.7783], 7);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap);

  //loop to add markers from array of coordinates
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
    //let coordsDrilldownGroup = [];
    let bottomMapMarkers = [];
    // TODO reset markers 
    /*for (let i = 0; i < filteredAttractions.length; i++) {
      L.marker(filteredAttractions[i].poiCoord).remove(mymap2);
    }*/
    /*if (bottomMapMarkers !== null) {
      for (var i = bottomMapMarkers.length - 1; i >= 0; i--) {
        delete bottomMapMarkers[i];
      }
    }*/

    //document.getElementById("mapid2").innerHTML = "";
    //mymap2.removeLayer(L.marker);
    /*for (let i = 0; i < bottomMapMarkers.length; i++) {
      mymap2.removeLayer(bottomMapMarkers[i]);
    }*/

    //loop to add markers from array of drilldown coordinates based on user selection to be rendered on the map
    for (let i = 0; i < filteredAttractions.length; i++) { 
      L.marker(filteredAttractions[i].poiCoord).addTo(mymap2).bindPopup("This is the "+filteredAttractions[i].poiName+" marker");
      bottomMapMarkers.push(filteredAttractions[i].poiCoord);
    }

    console.log(bottomMapMarkers);
    console.log(mymap2);
    
    //set the map to include all POI markers from array above with padding and zoom/map animation
    mymap2.flyToBounds(bottomMapMarkers, {
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
    <br />
    <h3>Detailed view of ${citySelection.name}:</h3>
    <div class="row">
      <div class="col">
        <div id="mapid2"></div>
      </div>
      <div class="col" id="drilldownDetails>
        <label for="tripType"><h4>Points of interest for ${citySelection.name}: </h4></label>
        <select id="tripType" name="tripType" onchange="filterDrilldown(${citySelectionIndex});">
          <option value="allTypes">All</option>
          <option value="Historic/Monument">Historic / Monument</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Restaurant/Pub">Restaurant / Pub</option>
        </select>
        <div id="poi-list"></div>
      </div>
    </div>
  `;

  //render drilldown map and POI markers using mapbox API and leaflet library
  mymap2 = L.map('mapid2', {scrollWheelZoom: false}).setView(citySelection.coord, 10);

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


let fontMapper = [
  {
    poiType: "Historic/Monument",
    iconType: `<i class="fas fa-landmark"> </i>`
  },
  {
    poiType: "Restaurant/Pub",
    iconType: `<i class="fas fa-utensils"> </i>`
  },
  {
    poiType: "Outdoors",
    iconType: `<i class="fas fa-cloud-sun"> </i>`
  }
];

//create drilldown view content, pass in index of the city from the selection
function updateDetailsViewContent(filteredAttractions) {
  let poiList = "";
  //loop to create filtered points of interest content for the drill-down pane
  for (let i = 0; i < filteredAttractions.length; i++) {
    //use Array find method to select Font Awesome code corresponding to attraction type and insert in results HTML
    let icon = fontMapper.find(function (placeIcon) {
      console.log(placeIcon);
      return placeIcon.poiType == filteredAttractions[i].poiType;
    });
    //select the iconType HTML from the object returned by the loop above
    let finalIcon = icon.iconType;
    //create HTML with data corresponding to the selected POI type
    poiList +=
    `<p>
      <strong>${i + 1}. ${filteredAttractions[i].poiName} ${finalIcon}</strong>
      <p>Summary: ${filteredAttractions[i].poiSummary}</p>
      <p>Type of attraction: ${filteredAttractions[i].poiType}</p>
    </p>
    `;
  }

  // clear existing map markers

  /*for (let i = 0; i < filteredAttractions.length; i++) {
    L.marker(filteredAttractions[i].poiCoord).remove(mymap2);
  }*/
  /*if (bottomMapMarkers !== null) {
    for (var i = bottomMapMarkers.length - 1; i >= 0; i--) {
      delete bottomMapMarkers[i];
    }
  }*/

  //document.getElementById("mapid2").innerHTML = "";
  /*for (let i = 0; i < bottomMapMarkers.length; i++) {
    mymap2.removeLayer(bottomMapMarkers[i]);
  }*/

  // update map
  updateDetailsMapMarkers(filteredAttractions);

  // update poilist inner html
  document.getElementById("poi-list").innerHTML = poiList;
}

  function renderBottomMap (citySelection) {
  //render drilldown map and POI markers using mapbox API and leaflet library
  let mymap2 = L.map('mapid2', {scrollWheelZoom: false}).setView(citySelection.coord, 10);
  let filteredSelection = citySelection.drilldown;

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap2);

  //loop to add markers from array of drilldown coordinates based on user selection to be rendered on the map
  //let coordsDrilldownGroup = [];

  for (let i = 0; i < filteredSelection.length; i++) {
    L.marker(filteredSelection[i].poiCoord).addTo(mymap2).bindPopup("This is the "+filteredSelection[i].poiName+" marker");
    bottomMapMarkers.push(filteredSelection[i].poiCoord);
  }

  //set the map to include all POI markers from array above with padding and zoom/map animation
  mymap2.flyToBounds(bottomMapMarkers, {
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

    <div class="col text-center align-items-center">
      <button onclick="clearDrilldown(); return false;">Hide Detailed View</button>
      <button onclick="">Print Your Travel Map</button>
      <button onclick="">E-Mail Your Travel Map</button>
    </div>

  `;
}
