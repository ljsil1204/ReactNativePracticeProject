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

      <View>
        <View style = {styles.container}>
          
          <Image source={require('./assets/dog.jpg')} style={{width:100, height:100}} />

          <View style = {{flexDirection:'column', marginLeft: 15}}>
            <View style = {styles.listItem}>
              <Text style = {styles.title}>활동연대</Text>
              <Text style = {styles.detail}>2000, 2010</Text>
            </View>

            <View style = {styles.listItem}>
              <Text style = {[styles.title, styles.point]}>출생</Text>
              <Text style = {styles.detail}>1994</Text>
            </View>

            <View style = {styles.listItem}>
              <Text style = {styles.title}>품종</Text>
              <Text style = {styles.detail}>개</Text>
            </View>
          </View>

        </View>

        <View style = {{width : 50, height : 50, backgroundColor : 'red'}} ></View>
        <View style = {{width : 100, height : 100, backgroundColor : 'skyblue'}} ></View>
        <View style = {{width : 140, height : 140, backgroundColor : 'skyblue'}} ></View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container : {
    marginTop : 50,
    marginLeft : 20,
    flexDirection : 'row'
  },
  listItem : {
    flexDirection : 'row',
    marginBottom : 5
  },
  title : {
    marginRight : 5,
    color : '#000000',
    fontWeight: 'bold',
    fontSize : 15
  },
  detail : {

  },
  point : {
    color : 'red'
  }
});

export default App;
