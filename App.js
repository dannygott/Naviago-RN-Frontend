import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Naviago_Map from "./src/props/Naviago_Map.js"


var width_Full = Dimensions.get('window').width; //full width
var height_Full = Dimensions.get('window').height; //full height

export default class App extends React.Component {
  render() {
    return (

        <Naviago_Map  style = {styles.container}/>

    );
  }
}



const styles = StyleSheet.create({
  container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

  },
});
