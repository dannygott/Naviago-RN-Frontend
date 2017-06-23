'use strict';

import React, { AppRegistry, Component } from 'react';

import App from './src/props/naviago_map_planning/containers/app';
import Counter from "./src/props/naviago_map_planning/components/counter.js"


export default class MyApp extends Component {
  render() {
    return (
      <Counter/>
    );
  }
}