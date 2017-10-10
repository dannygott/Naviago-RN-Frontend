import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Button} from 'react-native';
import MapView from 'react-native-maps';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
var stylesGlobal = require("./stylesGlobal.js")

export default class LocationInfo extends Component {
    constructor(props){
        super(props);
        this.state = {};

    }

    render(){
        const{locationInfo, showInfo,} = this.props;
        return (
        <PopupDialog
            dialogTitle={<DialogTitle title={locationInfo.title} />}
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
            dialogStyle = {{height:"70%", width:"95%"}}
            overlayBackgroundColor = {"rgba(108, 52, 199, 0)"}
            dismissOnTouchOutside = {"True"}
        >

        <View style = {{flex : 1}}>
        <ScrollView style = {{flex : 1}}>
          <View style = {{
            flex : 0,
            width : "100%",
            height : 200,
          }}>
            <Image style={stylesGlobal.locationImage} source={require('./tempLocPic-1.jpg')} />
          </View>
          <View style={[stylesGlobal.starContainer, stylesGlobal.inlineContainer]}>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Text style={stylesGlobal.inlineContent}>(5/5)</Text>
          </View>
          <Text style = {{margin: 10,}}>
          {locationInfo.key}
          </Text>
          
          </ScrollView>
          <Button style = {{width : "20%"}} title = {"Add This"} onPress = {showInfo}></Button>
        </View>
      </PopupDialog>
        );
    }
}