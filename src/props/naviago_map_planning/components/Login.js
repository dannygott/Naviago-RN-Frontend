var React = require("react-native");
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as Actions from '../actions';

function mapStateToProps(state) { return { user: state.userReducers.user }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

var Login = React.createClass({
    onMapNeedUpdate(){
        this.props.login({
            userName: 'testuser',
            password: 'sldkfjsdlfkj'
        });
    }

    render() {
    return(     
      this.state = {
                markers: [{
                  title: 'hello',
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
            
            <MapView
              style = {{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,

              }}
              initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
              }}
              onRegionChangeComplete = {this._updateMaps}

            >

              {this.state.markers.map(marker => (
                    <MapView.Marker
                    image = {require("./Flag-1.png") }
                    coordinate={marker.coordinates}
                    title={marker.title}
                    anchor = {marker.anchor}
                    />
                ))}
            </MapView>
       )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);