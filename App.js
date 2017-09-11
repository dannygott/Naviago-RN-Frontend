'use strict';

import React, { AppRegistry, Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import App from './src/props/naviago_map_planning/containers/app';
import Search from "./src/props/naviago_map_planning/components/search"
import Login from "./src/props/naviago_map_planning/components/login"


export default class MyApp extends Component {
  render() {
    return (
      <View style = {{flex:1}}>
        <App/>
        <Search/>
      </View>
    );
  }
}