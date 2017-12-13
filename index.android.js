var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

const App = () =>{
  return (
    <Text>Meu primeiro App</Text>
    );
};

AppRegistry.registerComponent('app1', () => App);