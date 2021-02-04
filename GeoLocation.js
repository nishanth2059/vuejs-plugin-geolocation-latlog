let lat = null;
let log = null;

function successFunction(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
}

export const getGeoLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction);
  } else {
    console.log('Error!!!');
  }

  return "Latitude: " + lat + " && Longitude: " + log;
}