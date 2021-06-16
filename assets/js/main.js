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
      oiCoord: [53.2697, -9.0539],
      poiSummary: 'An old arch from Viking times',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Browne Doorway',
      oiCoord: [53.2747, -9.0496],
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
  }
];

//Landing page default view upon arriving to the home page

function defaultView() {
  return document.getElementById("form-div").innerHTML = `
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
    <button onclick="returnForm();">Start building your travel map now!</button>
  `
}

//Generate map quiz form html

  //HTML content generation
  function returnForm() {
    return document.getElementById("form-div").innerHTML = `
      <div>
        <h3 class="">Apply to join Driven:</h3>
        <p>Ready to join the fun?  We are looking for new members!</p>
        <p>To apply to join the club, please enter your contact details below and select the desired membership level.  After your application has been submitted, a staff member will reach out to you for further details.</p>
          <form action="#">
            <div class="">
              <label for="fname">First Name:</label>
              <input type="text" class="form-control" placeholder="Enter First Name" id="fname" aria-label="First Name" required>
            </div>
            <div class="form-group">
              <label for="lname">Last Name:</label>
              <input type="text" class="form-control" placeholder="Enter Last Name" id="lname" aria-label="Last Name" required>
            </div>
            <div class="form-group">
              <label for="phone">Mobile phone number:</label>
              <input type="tel" class="form-control" placeholder="Enter Mobile Number - eg. +353 000-123-4567" id="phone" name="phone" pattern="+[0-9]{3} [0-9]{3}-[0-9]{3}-[0-9]{4}" aria-label="Mobile Phone Number" required>
            </div>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" placeholder="Enter email address" id="email" aria-label="Email Address" required>
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" placeholder="Choose password" id="pwd" aria-label="password" required>
            </div>
            <h4 class="member-app-title">Membership Type:</h4>
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="membership" id="standardMember" value="option1" aria-label="Standard Membership" checked>
                  <label class="form-check-label" for="standardMember">Standard Membership</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="membership" id="premiumMember" value="option2" aria-label="Premium Membership">
                  <label class="form-check-label" for="premiumMember">Premium Membership</label>
                </div>
              </div>
            <p><i>Note: a member of staff will contact you to collect payment details upon processing your application.</i></p>
            <br />
            <button type="submit" onclick="returnMap();">Create your travel Map!</button>
          </form>
      </div>
    `
  }

//Process map quiz inputs
  //Event listeners for form submission
  
  //validate form for completeness before generating map
  
  //Consume inputs from form form

//Randomize results based on inputs
  //Use user inputs to generate array of results
  function randomizer (locationsArr) {
    return Math.floor(Math.random() * locationsArr);
  };

  //randomly select an item to add to the output array by producing an index value between 0 and the max of the 'data' array
  function generateCityList () {
    let citiesArr = [];

    //While loop used to add random values which correspond to the index of an item in the data array.  
    //If statement included to check for duplicates in the array of index values to prevent duplicate results from being displayed.
    while (citiesArr.length < 3) { //TODO: need to update 3 to be variable value consumed from form selection
      let randomResult = locationsArr[randomizer(locationsArr.length)];
      if (!citiesArr.includes(randomResult)) {
        citiesArr.push(randomResult);  
      };
    };
    return citiesArr;
  };

//Generate HTML content to return
var printArr = generateCityList();

function returnMap() {

  //display Leaflet map content
  let locationsList = "";

  for (let i = 0; i < printArr.length; i++) {
    locationsList +=
    `<p><strong>${i + 1}. ${printArr[i].name}</strong>
    <br />
    ${printArr[i].summary}
    <br />
    <button onclick="detailsView(${i});">Additional Details for ${printArr[i].name}</button>
    </p>
    <br />
    `;
  };

  document.getElementById("form-div").innerHTML = `
    <h2>Your Custom Travel Map:</h2>
    <br />
    <p>Thank you, ${fname.value}.  Please see your customized results below.</p>
    <br />
    <div class="main-container">
      <div class="left-div">
        <div id="mapid"></div>
      </div>
      <br />
      <div class="right-div">
        <h3>Your list of destinations for your trip:</h3>
        <br />
        ${locationsList}
      </div>
    </div>
  `;

  // TODO need to update center location to reflect first item in list of results
  let mymap = L.map('mapid').setView([53.3497, -6.2602], 13);

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
  };

  //set the map to include all POI markers upon rendering
  mymap.fitBounds(coordsGroup);

};

//create drilldown view content, pass in index of the city from the results displayed
function detailsView(citySelectionIndex) {

  let selection = printArr[citySelectionIndex]
  let poiList = "";

  for (let i = 0; i < selection.drilldown.length; i++) {
    poiList +=
    `<p><strong>${i + 1}. ${selection.drilldown[i].poiName}</strong>
    <br />
    ${selection.drilldown[i].poiSummary}
    </p>
    <br />
    `;
  }

  document.getElementById("form-div-2").innerHTML = `
    <h2>Detailed view of ${selection.name}:</h2>
    <br />
    <div class="main-container">
      <div class="left-div">
        <div id="mapid2"></div>
      </div>
      <br />
      <div class="right-div">
        <h3>Points of interest for ${selection.name}:</h3>
        <br />
        ${poiList}
      </div>
    </div>
  `;

  let mymap2 = L.map('mapid2').setView([53.3497, -6.2602], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA'
  }).addTo(mymap2);

  //loop to add markers from array of drilldown coordinates based on user selection
  let coordsDrilldownGroup = [];

    console.log(selection.drilldown.length);

  for (let i = 0; i < selection.drilldown.length; i++) { //TODO need to update array to new POI coords array
    L.marker(selection.drilldown[i].poiCoord).addTo(mymap2).bindPopup("This is the "+selection.drilldown[i].poiName+" marker");
    coordsDrilldownGroup.push(selection.drilldown[i].poiCoord);//TODO need to create an array of drilldown POI coords?
  };

  console.log(coordsDrilldownGroup)

  //set the map to include all POI markers upon rendering
  mymap2.fitBounds(coordsDrilldownGroup);
};