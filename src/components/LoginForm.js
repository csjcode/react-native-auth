import React, { Component } from 'react';
import {firebase} from 'firebase';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', pasword:'' };

  onButtonPress(){
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
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
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// export default LoginForm;
export { LoginForm };
 // export default LoginForm;
