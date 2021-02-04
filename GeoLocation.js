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