//Static data arrays for outputs
let locationsArr = [
  {
    name: 'Cork',
    coord: [51.8986, -8.4705],
    summary: 'Cork believes is the true capital of Ireland.'
  },
  {
    name: 'Galway',
    coord: [53.2841, -9.0378],
    summary: 'Galway is maybe the beste city in Ireland.'
  },
  {
    name: 'Dublin',
    coord: [53.3497, -6.2602],
    summary: 'Dublin is the capital of Ireland.'
  },
  {
    name: 'Belfast',
    coord: [54.5964, -5.9302],
    summary: 'Belfast is the capital of Northern Ireland.'
  },
  {
    name: 'Killarney',
    coord: [52.0595, -9.5053],
    summary: 'Killarney is the cutest town in Ireland.'
  },
  {
    name: 'Kilkenny',
    coord: [52.6510, -7.2484],
    summary: 'Those bastards! They Kilkenny!'
  }
];

//Landing page default view 
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

  //Consume inputs from form form

//Randomize results based on inputs
  //Use user inputs to generate array of results
  function randomizer (locationsArr) {
    return Math.floor(Math.random() * locationsArr);
  };

  //randomly select an item to add to the output array by producing an index value between 0 and the max of the 'data' array
  function generateCityList () {
    let printArr = [];

    while (printArr.length < 3) { //need to update 3 to be variable value consumed from form selection
      let randomResult = locationsArr[randomizer(locationsArr.length)];
      if (!printArr.includes(randomResult)) {
        printArr.push(randomResult);  
      };
    };
    return printArr;
  };

//validate form for completeness before generating map


//HTML content to return
function returnMap() {
  let printArr = generateCityList();

  //display Leaflet map content
  let locationsList = "";

  for (let i = 0; i < printArr.length; i++) {
    locationsList +=
    `<p><strong>${i + 1}. ${printArr[i].name}</strong>
    <br />
    ${printArr[i].summary}
    <br />
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
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

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
//let group = new L.featureGroup(coordsGroup);
mymap.fitBounds(coordsGroup);

}