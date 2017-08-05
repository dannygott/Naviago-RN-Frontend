import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';


export default class Search extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.topSearch}>
            <TextInput
                  inlineImageLeft = {"search.png"}
                  defaultValue = {"Search"}
                  style={styles.searchText}
                  underlineColorAndroid = {"transparent"}
              />
        </View>        
        <BottomSearch name = "jaun"/>
      </View>

    );
  }
}


class BottomSearch extends Component {
  render() {
    return (
      <View style = {styles.bottomSearch}>
          
      </View>

    );
  }
}



const styles = StyleSheet.create({
  topSearch: {
    marginTop:25,
    position:"relative",
    flex: 0,
    alignSelf:'center',
    height:"6%",
    backgroundColor: '#22B473',
    width:"90%",
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    justifyContent:"center",
    zIndex:100,
  },
  container: {
    position:"absolute",
    flex: 0,
    width: "100%",
    height: "100%",
  },
  bottomSearch:{
    position:"relative",
    flex: 0,
    width: "90%",
    height: "9%",
    backgroundColor: "white",
    zIndex:-1,
    alignSelf:'center',
  },
  searchText:{
    alignSelf:"center",
    width:"70%",
    color:"white",
    fontSize:20,
  }
});





