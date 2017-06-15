import React from 'react';
import StyleSheet from 'react-native';
import MapView from 'react-native-maps';


export default class Naviago_Map extends Component {

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
    return (
          <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}

                region={this.state.region}
                onRegionChange={this.onRegionChange}
            >

              {this.state.markers.map(marker => (
                    <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                    />
                ))}

            </MapView>
    );
  }
}
