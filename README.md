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

getGeoLocation()
```
let showPosition = new Promise(function(myResolve, myReject) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            myResolve("Latitude: " + position.coords.latitude + " && Longitude: " + position.coords.longitude);
        });
    } else {
        myReject("Something went wrong!!!");
    }
});

console.log("Location : " + showPosition.then(
    function(value) { alert(value); },
    function(error) { alert(error); }
  ));
