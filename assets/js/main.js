//Static data array of objects for outputs used as a simulated JSON response 
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
      poiName: 'FitzGerald Park',
      poiCoord: [51.8955, -8.4933],
      poiSummary: 'Popular green space with a museum, fountain, sculptures, walking paths & manicured landscaping.  Includes the Cork Public Museum and a bike hire location.',
      poiType: 'Outdoors'
    },
    {
      poiName: 'The English Market',
      poiCoord: [51.8976, -8.4743],
      poiSummary: 'Traders selling organic and locally produced food in an 18th-century covered market.',
      poiType: 'Restaurant/Pub'
    }]
  },
  {
    name: 'Galway',
    coord: [53.2841, -9.0378],
    summary: 'Galway is a city in the west of Ireland, chartered in 1484, and is the sixth largest city in the country.  The city is known for hosting many festivals, celebrations and events including the Galway Arts Festival.',
    drilldown: [{
      poiName: "The King's Head",
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
      poiSummary: 'Originally located on Lower Abbeygate Street but now standing at the north end of Eyre Square, was the doorway to the townhouse of the Browne family, one of the fourteen Tribes of Galway.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Eyre Square',
      poiCoord: [53.2744, -9.0493],
      poiSummary: 'Popular square in the heart of the city featuring grassy areas, trees, sculptures & a playground.',
      poiType: 'Outdoors'
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
      poiName: "St. Stephen's Green",
      poiCoord: [53.3379, -6.2590],
      poiSummary: "City centre park with ornamental lake, waterfall, sculptures and a children's playground.",
      poiType: 'Outdoors'
    },
    {
      poiName: 'Spire of Dublin',
      poiCoord: [53.3498, -6.2602],
      poiSummary: 'Also called the "Monument of Light", it is a large, stainless steel, pin like monument that is 120 meters (390ft) tall located in North Dublin.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Molly Malone',
      poiCoord: [53.3437, -6.2609],
      poiSummary: 'Bronze statue of a fictional fishmonger named Molly Malone, the star of a well-known Irish song.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Keohes Pub',
      poiCoord: [53.3411, -6.2594],
      poiSummary: 'Classic pub scattered with original features such as mahogany doors and wood partitioned snug areas.',
      poiType: 'Restaurant/Pub'
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
    },
    {
      poiName: 'Botaic Gardens',
      poiCoord: [54.5806, -5.9303],
      poiSummary: 'Elaborate public garden dating to 1828, featuring tropical species & an elegant domed conservatory.',
      poiType: 'Outdoors'
    }]
  },
  {
    name: 'Killarney',
    coord: [52.0595, -9.5053],
    summary: "Killarney is a town in County Kerry in southwest Ireland. It's natural heritage, history and location on the Ring of Kerry make Killarney a popular tourist destination.",
    drilldown: [{
      poiName: 'Killarney House',
      poiCoord: [52.0556, -9.5116],
      poiSummary: 'Historic, restored house and gardens in Killarney National Park, which serves as the visitor center for Killarney National Park.',
      poiType: 'Outdoors'
    },
    {
      poiName: 'Murphy Brownes',
      poiCoord: [52.0598, -9.5093],
      poiSummary: 'A restaurant on High Street in Killarney town, that offers "the best of local home grown produce from certified suppliers in a straightforward yet eclectic menu and relaxed setting.".',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: "Murphy's Ice Cream",
      poiCoord: [52.0590, -9.5091],
      poiSummary: "Local ice cream shop offering premium ice cream.  Founded in Dingle in 2000, Murphy's uses the best local ingredients including Kerry cow milk to make their ice cream.",
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Muckross House',
      poiCoord: [52.0173, -9.5010],
      poiSummary: 'Furnished 19th-century mansion set among mountains and woodland, with shop, cafe and working farms.',
      poiType: 'Historic/Monument'
    }]
  },
  {
    name: 'Kilkenny',
    coord: [52.6510, -7.2484],
    summary: 'Kilkenny began with an early sixth-century ecclesiastical foundation within the Kingdom of Ossory. Following the Norman invasion of Ireland, Kilkenny Castle and a series of walls were built to protect the burghers of what became a Norman merchant town.',
    drilldown: [{
      poiName: 'Kilkenny Castle',
      poiCoord: [52.6502, -7.2495],
      poiSummary: 'Built in 1195 to control a fording-point of the River Nore and the junction of several routeways. It was a symbol of Norman occupation and in its original thirteenth-century condition it would have formed an important element of the defences of the town with four large circular corner towers and a massive ditch, part of which can still be seen today on the Parade.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Left Bank',
      poiCoord: [52.6504, -7.2514],
      poiSummary: 'Huge banking hall with polished Victorian-style decor, a host of bar areas and regular live bands..',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Rothe House & Garden',
      poiCoord: [52.6542, -7.2547],
      poiSummary: 'Restored 1594 house, garden and museum with a notable timber ceiling, home to a genealogy centre.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'River Nore Linear Park',
      poiCoord: [52.6669, -7.2587],
      poiSummary: 'Riverside walk following the River Nore for 6 kilometers through Kilkenny town.',
      poiType: 'Outdoors'
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
      poiSummary: 'Restored castle built during the 15th & 17th centuries, with guided tours of its furnished rooms.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'The Forge',
      poiCoord: [54.6554, -8.1124],
      poiSummary: 'A pub in Donegal town.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'The River Bank Walk',
      poiCoord: [54.6548, -8.1128],
      poiSummary: 'A walking trail along the river Eske through Donegal town.',
      poiType: 'Outdoors'
    }]
  }
];

//Array of objects providing mapping between point of interest type and it's corresponding Font Awesome icon to be displayed in results.
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

//Global Variables 
//needed to hold travel destinations content generated in the generateTopMapCitiesResults function, to be consumed by detailsViewContent function below
let cityList = []; //array to hold results to return 
let mymap2; //lower drill-down section map, needs to be accessed by multiple functions

//Landing page default view which is triggered by onload event upon arriving to the home page
function setLandingPage() {
  document.getElementById("controls").innerHTML = `
    <div class="row">
      <div class="col text-center">
        <h3>Welcome to Mappy, the Ireland travel map service!</h3>
        <p>Can't decide where to go on your next trip around Ireland?  We are here to help!</p>
        <br />
      </div>
      <!--Landing page text summary-->
      <div class="container mx-auto text-center">
        <div class="col-md-4 text-start mx-auto">
        <p>Our travel map generation tool will help you plan a wonderful trip around Ireland.  
        <br />
        Some features of our tool include:
        </p>
        <ul>
          <li>Creating unique lists of destinations around Ireland.</li>
          <li>Help you plan your next trip.</li>
          <li>Show you interesting things to do on your trip.</li>
          <li>Download your travel map to your computer to take with you!</li>
        </ul>
        </div>
      </div>
      <br />
      <div class="container mx-auto text-center">
        <p>Some of the top destination cities in Ireland include:</p>
      </div>
    </div>
    <!--Grid container for carousel-->
    <div class="row">
      <div id="carousel-div" class="col-md-4 mx-auto text-center">
      <!--img tag used to trigger an equivalent to an onload event in this div so the map carousel will load automatically-->
        <img src onerror='setMapCarousel();'>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
      <!--Button to launch map page -->
        <button class="map-button" type="button" onclick="mapLoader();">Build your map!</button>
      </div>
    </div>
  `;
  return;
}

//sets map carousel HTML for landing page, split out of landing view for ease of maintenance
function setMapCarousel() {
  document.getElementById("carousel-div").innerHTML = `
  <!--Bootstrap 5 Carousel template code below taken from official Bootstrap documentation-->
        <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Dublin"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Galway"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Cork"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Belfast"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Killarney"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="5" aria-label="Kilkenny"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="6" aria-label="Donegal"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/img/home-img.jpg" class="d-block w-100" alt="Dublin city image">
              <div class="carousel-caption d-none d-md-block">
                <h5>Dublin</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assets/img/home-img-2.jpg" class="d-block w-100" alt="Galway city image">
              <div class="carousel-caption d-none d-md-block">
                <h5>Galway</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assets/img/home-img-3.jpg" class="d-block w-100" alt="Cork city image">
              <div class="carousel-caption d-none d-md-block">
                <h5>Cork</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assets/img/home-img-4.jpg" class="d-block w-100" alt="Belfast city image">
              <div class="carousel-caption d-none d-md-block">
                <h5>Belfast</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assets/img/home-img-5.jpg" class="d-block w-100" alt="Killarney city image">
              <div class="carousel-caption d-none d-md-block">
                <h5>Killarney</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assets/img/home-img-6.jpg" class="d-block w-100" alt="Kilkenny city image">
              <div class="carousel-caption d-none d-md-block">
                <h5>Kilkenny</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assets/img/home-img-7.jpg" class="d-block w-100" alt="Donegal city image">
              <div class="carousel-caption d-none d-md-block">
                <h5>Donegal</h5>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
  `;
  return;
}

//Loads preference selection form for number of cities to visit, HTML layout and the default main map view 
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
        <button class="map-button" type="submit" onclick="generateTopMapCitiesResults(); return false;">Create your travel map!</button>
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

//Randomize results to return based on user number of cities input

//consume user preference inputs to generate array of results, generates array index values to be used by generateCityList function below
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
  document.getElementById("form-div-2").innerHTML = ``; //clear drilldown panel if user clicks generate new map and a drilldown from a past map was already loaded.

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
  document.getElementById("form-div").innerHTML = `
    <h3>Your Custom Ireland Travel Map:</h3>
      <p>Please see your customized results below.</p>
      <div class="row">
        <div class="col">
          <div id="mapid"></div>
        </div>
        <div class="col">
          <h4>Destinations selected for your trip:</h4>
          <div class="row">${locationsList}</div>
        </div>
      </div>
    `;

  //render the upper city results map via mapbox API & leaflet library
  let mymap = L.map('mapid', {scrollWheelZoom: false}).setView([53.2734, -7.7783], 7);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap);

  //loop to add markers from array of coordinates, coordsGroup array is the output needed by Leaflet to generate map markers
  let coordsGroup = [];

  for (let i = 0; i < cityList.length; i++) {
    L.marker(cityList[i].coord).addTo(mymap).bindPopup("This is the "+cityList[i].name+" marker");
    coordsGroup.push(cityList[i].coord);
  }

  //set the map to fit all POI markers in view upon rendering with padding and map/zoom animation
  mymap.flyToBounds(coordsGroup, {
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

  document.getElementById("form-div-2").innerHTML = `
    <br />
    <h3>Detailed view of ${citySelection.name}:</h3>
    <div class="row">
      <div class="col">
        <div id="mapid2"></div>
      </div>
      <div class="col" id="drilldownDetails">
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

//function to add markers 
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

  //set the map to include all POI markers from array above with padding and zoom/map animation
  mymap2.flyToBounds(bottomMapMarkers, {
    padding: L.point(36, 36), 
    animate: true,
  });
}

//create drilldown view content, pass in index of the city from the selection
function updateDetailsViewContent(filteredAttractions) {
  let poiList = "";
  //loop to create filtered points of interest content for the drill-down pane
  for (let i = 0; i < filteredAttractions.length; i++) {
    //use Array find method to select Font Awesome code corresponding to attraction type and insert in results HTML
    let icon = fontMapper.find(function (placeIcon) {
      return placeIcon.poiType == filteredAttractions[i].poiType;
    });
    //select the iconType HTML from the object returned by the loop above
    let finalIcon = icon.iconType;
    //create HTML with data corresponding to the selected POI type
    poiList +=
    `<h6>${i + 1}. ${filteredAttractions[i].poiName} ${finalIcon}</h6>
      <p>Summary: ${filteredAttractions[i].poiSummary}</p>
      <p>Type of attraction: ${filteredAttractions[i].poiType}</p>
    `;
  }

  //TODO - clear existing map markers so only current drill-down selection will be visible
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

//render drilldown map and POI markers using mapbox API and leaflet library
function renderBottomMap (citySelection) {
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

//function to clear the entire lower drill-down container to display only the top map & city results
function clearDrilldown() {
  document.getElementById("form-div-2").innerHTML = ``;
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
