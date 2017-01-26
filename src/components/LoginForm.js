import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardSection>
        <CardSection>
          <TextInput />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
export { LoginForm };
// export default LoginForm;
