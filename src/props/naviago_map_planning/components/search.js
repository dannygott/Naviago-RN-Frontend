import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Animated } from 'react-native';
import { Constants } from 'expo';


export default class Search extends Component {




  constructor(props) {
    super(props);
    this.state = { isSearchActive : false, searchValue : false, text: "jaun", } 

  }

  render() {

    return (
      <View style = {styles.container}>
        <View style={styles.topSearch}>
            <TextInput
                  inlineImageLeft = {"search.png"}
                  defaultValue = {"Search"}
                  style={styles.searchText}
                  underlineColorAndroid = {"transparent"}
                  onSelectionChange = {(main) => {this.setState({isSearchActive : true}); console.log(main.nativeEvent)}}
                  onChangeText = {(text) => {this.setState({text})
                  console.log(this.state)}}
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
      <Animated.View style = {styles.bottomSearch}
      componentDidMount = {()=> {   
        console.log("jaunsk"); 
        if (this.state.isSearchActive == true){
          Animated.timing(                            // Animate value over time
            this.state.fadeAnim,                      // The value to drive
            {
              toValue: 1,                             // Animate to final value of 1
            }
          ).start(); }}}>    
      </Animated.View>

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
    opacity: 0,
  },
  searchText:{
    alignSelf:"center",
    width:"70%",
    color:"white",
    fontSize:20,
  }
});





