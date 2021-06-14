//Static data arrays for outputs
let mapResults = [];

//Generate map quiz form html


//Process map quiz inputs


//Randomize results based on inputs


//Generate map output


//Generate map output html


//Set map coords to London
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGhlc2NoIiwiYSI6ImNrcHdtcnphYTAzMnIyb3AwbGFzeDNhZ24ifQ.oaM0BZ8bOBg_8jf2HU9YgA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

//set a marker pin on the map
var marker = L.marker([51.5, -0.09]).addTo(mymap);

//static pop-up on map at pre-determined location
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

//function to create a popup on the map with lat & long of where user clicks on map
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);