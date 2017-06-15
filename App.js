import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Naviago_Map from "./src/props/Naviago_Map.js"




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Naviago_Map/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
