var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = () =>{
  return (
    <Text>Meu primeiro App</Text>
    );
};

AppRegistry.registerComponent('app1', () => App);