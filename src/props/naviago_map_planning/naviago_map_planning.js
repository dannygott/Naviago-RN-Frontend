import React from 'react';
import StyleSheet from 'react-native';
import MapView from 'react-native-maps';



export default class Naviago_Map extends React.Component {




getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

onRegionChange(region) {
  this.setState({ region });
}




  render() {

    this.state = {
                    markers: [{
                      title: 'hello',
                      coordinates: {
                        latitude: 3.148561,
                        longitude: 101.652778,},
                      key: 22222222222222
                    },
                    {
                      title: 'hello',
                      coordinates: {
                        latitude: 3.149771,
                        longitude: 101.655449 },
                      image:"./Flag-1.png",
                      anchor: { x: 0, y: 1, },
                      key : 11111111  
                    }],
                  }

    return (
          <MapView
              style = {{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,

              }}
              initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
              }}

            >

              {this.state.markers.map(marker => (
                    <MapView.Marker
                    image = {require("./Flag-1.png") }
                    coordinate={marker.coordinates}
                    title={marker.title}
                    anchor = {marker.anchor}
                    />
                ))}
            </MapView>
    );
  }
}

