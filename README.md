# react-native-auth
Source from Udemy course Complete React Native

* Start Android Studi
* `cd C:\Users\CS\Documents\Web Development\react-native\react-native-auth`
* `> C:\Users\CS\AppData\Local\Android\sdk\"AVD Manager.exe"`
* `> react-native run-android`
* `> packager.sh`

---------------------------------

### 9.55 Common Root Component

* We're going to to have one sngle App component and then a Login
* Make new folder called src
* Make src/App.js
* Ad boilerplate in App
* In index.android.js `import { AppRegistry } from 'react-native';`
* In index.android.js `AppRegistry.registerComponent('react-native-auth', () => App)`
* Copy same code in index.android and index.ios
* Check to make sure it's running in the emulator

---------------------------------

### 9.56 Copying Reusable Components

* Copy components from albums: Card, CardSection, Button, Header
* We're going to use a Trick to get less impot statements in each file
* In /common/ create index.js and import several Components an export
* By default index.js will be picked up by import directory

```javascript
export * from './Header';
export * from './Button';
export * from './Card';
export * from './CardSection';
```

* Main downside to this approach is you cannot use the export 'default' keyword in the other Components.
* Instead you do something like this key:value `export { Button: Button };`
* or to condense for ES6: `export { Button };`

---------------------------------

### 9.57 What is Firebase?

* Create new project in Firebase
* Create new app with Web (Javascript, not Android or iOS
* Set up authentication with email

---------------------------------

### 9.58 Firebase Client Setup

* `npm install --save firebase`
* When we created react-native-auth this created a bucket on the firebase server
* Now we have to setup locally
* `import firebase from 'firebase';`
* Back to firebase.com - get the copy-paste code from Web Setup
* copy just the object inside `firebase.initializeApp({`
```javascript
componentWillMount (){
  firebase.initializeApp({
      apiKey: 'AIzaSyCnz8V-MuEiOWcs3oyBBxyO6BCjpAGJm7o',
      authDomain: 'react-native-auth-284c7.firebaseapp.com',
      databaseURL: 'https://react-native-auth-284c7.firebaseio.com',
      storageBucket: 'react-native-auth-284c7.appspot.com',
      messagingSenderId: '1049444233116'
  });
}
```

* make sure firebase import is above Header

---------------------------------

### 9.59 Login Form Scaffolding

* Signup form should be a component outside the app because soemtimes, such as after signin, it won't be needed.
* Create new component LoginForm in /component/
* Add login form boilerplate for class-based component
* Add in: `import { Button, Card, CardSection } from './common';`
* Remove View with Card
* Add Button

---------------------------------

### 9.60 Handling User Inputs

* Text inputs in card sections
* Handling text inputs is kind of a pain with React Native
* First make the text form.
* refactor to reusable Input component
* import in TextInput
* TextInput primitive does not have height or width, render of height/width = 0
* Add style prop to

---------------------------------

### 9.61 More on Handling User Inputs

* How do we get access to the text?
* To hold text in the TextInput we''re going to add state = { text:'' }
* `state = { text:'' }`
```javascript
<TextInput
value={this.state.text}
onChangeText={text => this.setState({ text })}
style={{ height: 20, width: 100 }} />
```
* `onChangeText={text => this.setState({ text })}` (this is destructured from text:text)

---------------------------------

### 9.62 How to Create Controlled Components

* When the onChange value changes, setState changes and the component re-renders
* The typed value is saved in state.

### 9.63 Making Text Inputs From Scratch

* We're going to make a reusable component for the text input.
* Create a new compnent in common Input.js - add to the export index.js also
* Scaffold out a simple component with a prop {label}

```javascript
const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};
```

### 9.64 A Focus on Passing Props

* In the new Input component we need to handle the state change. So we'll be adding props to Input.js

```javascript
const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 40, width: 100 }}
      />
    </View>
  );
```

In Loginform:

```javascript
class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}
```
----------------------------------------------------

### 9.65 Making the Input Pretty

* Input.js add styles
* Destrucure style tags
* `const { inputStyle, labelStyle, containerStyle } = styles;`
* Put corresponding styles in each Component tag
* Also make sure to pass the lable prop from LoginForm
* Make sure not to use both style props - earlier prop is overwritten by the later one

----------------------------------------------------

### 9.66 Inputs

* No default autocorrect - add a prop `autoCorrect={false}`
* `const Input = ({ label, value, onChangeText, placeholder }) => {`
* Add placeholder to Input.js
* Add placeholder to TextInput
* Change text prop to "email"

----------------------------------------------------

### 9.67 Password Inputs

* Initialize password state
* Create a new input tag in the card section
* Make the password not available in plain text
* If a prop is just true, it can be listed without the boolean
* In input.js in TextInput `secureTextEntry`
* We don;t always want Secure though. So we we add another prop to Input
* Now we need to go back an assign to a prop:   `secureTextEntry={secureTextEntry}`
* In the 2 CardSections - first plaintext, we can just leave it out, this is the same as false. Other one add.

----------------------------------------------------

### 9.68 Logging a User In

* Taps on button - add a function with callback
* Add callback to BUtton tag
* onPress prop
* `<Button onPress={this.onButtonPress.bind(this)}>`
* Define onPress - add helper method at top
* Import firebase and add method for signin

```javascript

  onButtonPress(){
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword();
  }

```

----------------------------------------------------

### 9.69 Error Handling

* The firebase code returns a promise
* Add .catch case to catch an error - setSatte to error if catch switch cannot signin or create account.
* After error state is set, we need to show that in the render of the component f it's set
* Add new text tag outside last CardSection
* Import Text tag, also add some styling to the text tag

----------------------------------------------------

### 10.70 More on Authentication Flow

* Attempt to signup
* Authentication Failed works
* We need to clear out email/password if incorrect
* Inside ButtonPress, reset setState to empty object
* Create new Spinner Component
* Add to index.js `export * from './Spinner';`

----------------------------------------------------

### 10.71 Creating an Activity Spinner

* Import ActivityIndicator primitve compnent
* Add style
* Add size prop

----------------------------------------------------

### 10.72 Conditional Rendering of JSX









.
