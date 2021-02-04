# vuejs-plugin-geolocation-latlog
Geo location fetching plugin for your Vue application

## Getting Started
Install
```
npm install --save vuejs-plugin-geolocation-latlog
```

How to use
```javascript

// use get geolocation function
import { getGeoLocation } from 'vuejs-plugin-geolocation-latlog'

getGeoLocation().then().catch()
```
--------------------------------------------
function getLocation() {
  let location;
  if (navigator.geolocation) {
    location = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    location = "Unable to find the location."
  }
}

function showPosition(position) {
 return "Latitude: " + position.coords.latitude + " && Longitude: " + position.coords.longitude;
}

export const getGeoLocation = function () {
  return getLocation();
}
----------------------------------------------
{
  "name": "vuejs-plugin-geolocation-latlog",
  "version": "1.0.0",
  "description": "Geo location fetching plugin for your Vue application",
  "github":"https://github.com/nishanth2059/vuejs-plugin-geolocation-latlog",
  "main": "GeoLocation.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Nishanth Poduval",
  "license": "nishanth2059",
  "bugs": {
    "url": "https://github.com/nishanth2059/vuejs-plugin-geolocation-latlog/issues"
  },
  "homepage": "https://github.com/nishanth2059/vuejs-plugin-geolocation-latlog"
}

