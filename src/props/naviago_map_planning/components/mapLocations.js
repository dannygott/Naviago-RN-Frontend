import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Button} from 'react-native';
import MapView from 'react-native-maps';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
var stylesGlobal = require("./stylesGlobal.js")

export default class MapLocations extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const{pushMarker, } = this.props;
        return(
            {this.state.markers.map(marker => (
                <MapView.Marker
                image = {require("./Flag-1.png") }
                coordinate={marker.coordinates}
                title={marker.title}
                anchor = {marker.anchor}
                onCalloutPress = {map_pull}
                onPress={() =>{ 
                                  
                                this.setState({"tagSelected":marker}, ()=>{
                                this.popupDialog.show();
                                console.log(this.state) 
                                })
                  }
                }
                />
            ))}

        )
    }
}





