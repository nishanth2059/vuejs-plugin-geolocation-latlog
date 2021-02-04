export const getGeoLocation = new Promise(function (myResolve, myReject) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      myResolve("Latitude: " + position.coords.latitude + " && Longitude: " + position.coords.longitude);
    });
  } else {
    myReject("Something went wrong!!!");
  }
});