import React, { Component } from 'react';
import {firebase} from 'firebase';
import { Text, Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {

  const { errorTextStyle } = styles;

  state = { email: '', pasword:'', error:'' };

  onButtonPress(){
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(()=>{
        firebase.auth().creatUserWithEmailAndPassword(email, password)
          .catch(()=>{
            this.setState(error:'Authentication Failure.')
          }
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>


        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color:'red'
  }
};

// export default LoginForm;
export { LoginForm };
 // export default LoginForm;
