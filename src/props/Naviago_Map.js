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
                        longitude: 101.652778
                      },
                    },
                    {
                      title: 'hello',
                      coordinates: {
                        latitude: 3.149771,
                        longitude: 101.655449
                      },  
                    }],
                  }

    return (
          <MapView

                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}

            >

              {this.state.markers.map(marker => (
                    <MapView.Marker
                    coordinate={marker.coordinates}
                    title={marker.title}
                    
                    />
                ))}

            </MapView>
    );
  }
}
