import React from 'react';
import { StyleSheet, Text, View, Dimensions, AppRegistry } from 'react-native';
var Login = require('./src/props/naviago_map_planning/components/Login')
//import Naviago_Map from "./src/props/naviago_map_planning/naviago_map_planning.js"
var userReducers = require('./src/props/naviago_map_planning/reducers/user')
import {createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

let store = createStore(combineReducers({userReducers}));

class App extends React.Component {
  render(){
    return(
      <Login markers ={[]} />
    )
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {()=><App/>}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyApp',()=> MyApp);