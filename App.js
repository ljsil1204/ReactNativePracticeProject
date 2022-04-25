/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class Dog extends Component {
  render() {
    let dogImg = '';
    if(this.props.type === 'one') {
      dogImg = require('./assets/dog.jpg');
    }else if(this.props.type === 'two') {
      dogImg = require('./assets/dog2.jpg');
    }

    return (
      <View>
        <Image source={dogImg} style={{width:100, height:100}} />
      </View>
    );
  }
}


class App extends Component {
  render() {
    return (
      <View style ={styles.container}>
        <Text style = {styles.hello}>Hellow Wolrd</Text>
        <Dog type = 'one' />
        <Dog type = 'two' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
  }
});

export default App;
