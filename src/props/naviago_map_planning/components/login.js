import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, Switch, TextInput } from 'react-native';
import { Constants, Components, Permissions } from 'expo';

export default class Login extends Component {
  state = {
    switchValue: true,
    inputValueUser: "Username",
    inputValuePass: "Password",
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  _handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
  }));

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  render() {
    return (

    
      
      
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Naviago
        </Text>
        <TextInput
          value={this.state.inputValueUser}
          onChangeText={this._handleTextChange}
          style={{ width: 250, height: 44, padding: 8, backgroundColor: "#FFFFFF", borderColor: 'gray', borderWidth: 1, underlineColorAndroid: "#FFFFFF", borderTopLeftRadius: 7, borderTopRightRadius: 7}}
        />
      
        <TextInput
          value={this.state.inputValuePass}
          onChangeText={this._handleTextChange}
          style={{ width: 250, height: 44, padding: 8, backgroundColor: "#FFFFFF", borderColor: 'gray', borderWidth: 1, underlineColorAndroid: "#FFFFFF", borderBottomRightRadius: 7, borderBottomLeftRadius: 7}}
        />
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#22B573',
  },
  paragraph: {
    margin: 24,
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFD85',
  },
});