/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

class App extends Component {
  render() {
    return (

      <View style = {styles.container}>
        <View style = {{flex:1, backgroundColor : 'red'}}></View>
        <View style = {{flex:2, backgroundColor : 'yellow'}}></View>
        <View style = {{flex:3, backgroundColor : 'blue'}}></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
});

export default App;
