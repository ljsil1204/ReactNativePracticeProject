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
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native';

class App extends Component {
  render() {
    return (

      <SafeAreaView style = {styles.container}>
        
        {/* <View style = {{flex:1, backgroundColor : 'red'}}></View>
        <View style = {{flex:2, backgroundColor : 'yellow'}}></View>
        <View style = {{flex:3, backgroundColor : 'blue'}}></View> */}


        <View style = {{width:50, height:50, backgroundColor : 'red'}}></View>
        <View style = {{width:50, height:50, backgroundColor : 'yellow'}}></View>
        <View style = {{width:50, height:50, backgroundColor : 'blue'}}></View>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    // flexDirection:'row'

    // justifyContent : 'flex-start' // 처음 위치
    // justifyContent : 'center' // 중간 위치
    justifyContent : 'flex-end' // 아래 위치
  }
});

export default App;
