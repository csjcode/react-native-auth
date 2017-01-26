import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
  componentWillMount (){
    firebase.initializeApp({
        apiKey: 'AIzaSyCnz8V-MuEiOWcs3oyBBxyO6BCjpAGJm7o',
        authDomain: 'react-native-auth-284c7.firebaseapp.com',
        databaseURL: 'https://react-native-auth-284c7.firebaseio.com',
        storageBucket: 'react-native-auth-284c7.appspot.com',
        messagingSenderId: '1049444233116'
    });
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
