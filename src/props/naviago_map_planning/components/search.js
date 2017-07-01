import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TextInput
                defaultValue = {"search"}
                style={styles.searchText}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    position:"absolute",
    flex: 0,
    alignSelf:'center',
    height:"7%",
    backgroundColor: '#4286f4',
    width:"90%",
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    justifyContent:"center",
  },
  searchText:{
    alignSelf:"center",
    width:"70%",
    color:"white",
    fontSize:20,
  }

});
