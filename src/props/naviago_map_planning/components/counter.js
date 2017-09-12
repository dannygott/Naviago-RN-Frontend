import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import MapView from 'react-native-maps';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
var stylesGlobal = require("./stylesGlobal.js")

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});




export default class Counter extends Component {
    constructor(props) {
      super(props);
        this.state = {
                  tagSelected : false,
                  infoShown : false,
                  markers: [{
                    title: "hello",
                    coordinates: {
                      latitude: 3.148561,
                      longitude: 101.652778,},
                    key: 22222222222222
                  },
                  {
                    title: 'hello',
                    coordinates: {
                      latitude: 3.149771,
                      longitude: 101.655449 },
                    image:"./Flag-1.png",
                    anchor: { x: 0, y: 1, },
                    key : 11111111  
                  }],
                }
    }
    
    _updateMaps(){
      if(this.props.locations.markers[0] != undefined) {this.setState(this.props.locations); }
    }


    render() {
      const { counter, increment, decrement, map_pull, locations } = this.props;
      return (

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>


          <MapView
            style = {{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,

            }}
            initialRegion={{
                  latitude: 3.149771,
                  longitude: 101.655449,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
            }}
            

          >

            {this.state.markers.map(marker => (
                  <MapView.Marker
                  image = {require("./Flag-1.png") }
                  coordinate={marker.coordinates}
                  title={marker.title}
                  anchor = {marker.anchor}
                  
                  onPress={() =>{ 
                                  console.log("jaun")  
                                  
                                  this._updateMaps.bind(this) 
                                  this.popupDialog.show();

                                  }
                                  }
                  />
              ))}
          </MapView>
          
          <PopupDialog
            dialogTitle={<DialogTitle title="Jaun Bitch Park" />}
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
            dialogStyle = {{height:"70%", width:"90%"}}
            overlayBackgroundColor = {"rgba(108, 52, 199, 0)"}
            dismissOnTouchOutside = {"True"}
              >

        <View>
        <ScrollView >

          <Image style={stylesGlobal.locationImage} source={require('./tempLocPic-1.jpg')} />
          <View style={[stylesGlobal.starContainer, stylesGlobal.inlineContainer]}>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Image style={[stylesGlobal.star, stylesGlobal.inlineContent]} source={require('./star-1.png')}/>
            <Text style={stylesGlobal.inlineContent}>(5/5)</Text>
          </View>
          <Text style = {{margin: 10,}}>
            {this.state.tagSelected.description}
          </Text>
          </ScrollView>
        </View>
      </PopupDialog>


        </View>
      );
    }
}
