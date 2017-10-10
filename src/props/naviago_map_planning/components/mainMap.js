import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Button} from 'react-native';
import MapView from 'react-native-maps';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
var stylesGlobal = require("./stylesGlobal.js")

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
                  tagSelected : false,
                  infoShown : false,
                  markers: [{
                    title: "hello",
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
    
    _updateMaps(){
      if(this.props.locations.markers[0] != undefined) {this.setState(this.props.locations); }
      console.log(this.props.locations)
    }


    render() {
      const { counter, increment, decrement, map_pull, locations, location_add } = this.props;
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
                  latitude: 3.149771,
                  longitude: 101.655449,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
            }}
            

          >

          <MapLocations/>
          </MapView>

        <Text>{counter}</Text>
              <LocationInfo onClick = {onClick}></LocationInfo>
        </View>
      );
    }
}
