import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Naviago_Map from "./src/props/naviago_map_planning/naviago_map_planning.js"


var width_Full = Dimensions.get('window').width; //full width
var height_Full = Dimensions.get('window').height; //full height

export default class App extends React.Component {
  render() {
    return (

        <Naviago_Map markers ={[]} />

    );
  }
}

