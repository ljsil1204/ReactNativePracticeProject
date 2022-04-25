/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {

  return (
    <View style = {styles.container}>
      <Text>Home Screen입니다.</Text>
      <Button 
        title='페이지 이동' 
        onPress={() => 
        navigation.navigate('Profile', { 
          name : 'Jin',
          // itemId: 86,
          otherParam: 'anything you want here', 
        })}/>
    </View>
  )

}

function ProfileScreen({navigation, route}) {

  const { itemId, otherParam } = route.params; 
  // const otherParam = route.params.otherParam; 와 동일

  return (
    <View style = {styles.container}>
      <Text>{route.params.name}의 ProfileScreen입니다.</Text>
      {/* <Button title='프로필 페이지 이동' onPress={() => navigation.navigate('Profile', { name : 'Jin' }) }/> */}

      <Text>itemId : {itemId} </Text>
      <Text>itemId : {otherParam} </Text>

      <Button title='프로필 페이지 이동' onPress={() => navigation.push('Profile', { name : 'Jin' }) }/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="popToTop" onPress={() => navigation.popToTop()} />
    </View>
  )

}

const App: () => Node = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          initialParams = {{itemId : 1000}} 
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'


  }
});

export default App;
