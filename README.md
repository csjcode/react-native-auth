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

* Main downside to this approach is you cannot use the export "default" keyword in the other Components.
* Instead you do something like this key:value `export { Button: Button };`
* or to condense for ES6: `export { Button };`
