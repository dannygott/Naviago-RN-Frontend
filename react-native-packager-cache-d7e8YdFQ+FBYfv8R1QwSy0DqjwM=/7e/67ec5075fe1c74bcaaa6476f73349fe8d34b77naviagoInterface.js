Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = locationsPull;

var _testdata = require("./testdata.js");

var _testdata2 = babelHelpers.interopRequireDefault(_testdata);

function locationsPull() {

  var testLocations = (0, _testdata2.default)();
  var locations = testLocations.results;
  var constructedLocation;
  var markerArray = [];

  for (i = 0; i < locations.length; i++) {

    var location = locations[i];

    constructedLocation = {
      title: location.name,
      coordinates: {
        latitude: location.geometry.location.lat,
        longitude: location.geometry.location.lng },
      icon: location.icon,
      key: location.id
    };

    markerArray.push(constructedLocation);
  }

  var finalMarkerObj = { markers: markerArray };
  return finalMarkerObj;
}