import returnTestData from "./testdata.js"

export default function locationsPull(){

  var testLocations = returnTestData() // grabs test data from external source
  var locations = testLocations.results // simplifies test locations
  var constructedLocation // var holds a constructed location to locations array to be pushed to map
  var markerArray = []

  for (i = 0; i < locations.length; i++){ // loops though all locations in array and converts them to mapable flags
    
    var location = locations[i]

    constructedLocation = { // location flag template
            title: location.name,
            coordinates: {
              latitude: location.geometry.location.lat,
              longitude: location.geometry.location.lng,},
            icon: location.icon,
            key: location.id
    }

    markerArray.push(constructedLocation) // pushes constructed flag to locations array
  
  }

  var finalMarkerObj ={ markers: markerArray,} // wraps the locations array
  return finalMarkerObj

}