import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
          onRegionChangeComplete = {this._updateMaps}

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

        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
