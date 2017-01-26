# react-native-auth
Source from Udemy course Complete React Native

* Start Android Studi
* `cd C:\Users\CS\Documents\Web Development\react-native\react-native-auth`
* `> C:\Users\CS\AppData\Local\Android\sdk\'AVD Manager.exe'`
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
* Remove View wth Card
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
