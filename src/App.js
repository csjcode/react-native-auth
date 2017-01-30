import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount (){
    firebase.initializeApp({
        apiKey: 'AIzaSyCnz8V-MuEiOWcs3oyBBxyO6BCjpAGJm7o',
        authDomain: 'react-native-auth-284c7.firebaseapp.com',
        databaseURL: 'https://react-native-auth-284c7.firebaseio.com',
        storageBucket: 'react-native-auth-284c7.appspot.com',
        messagingSenderId: '1049444233116'
    });


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <View style={styles.buttonContainerStyle}>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </View>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    height: 40
  }
};

export default App;
