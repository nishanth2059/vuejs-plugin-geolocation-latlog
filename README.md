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

getGeoLocation.then(
    (value) => {
        alert(value);
    },
    (error) => {
        alert(error);
    }
);
```
