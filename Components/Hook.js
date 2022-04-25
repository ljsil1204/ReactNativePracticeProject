/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import type {Node} from 'react';
 import React, {Fragment, Component } from 'react';
 import {StyleSheet, View, Text,} from 'react-native';

 const Hook: () => Node = () => {
   return (
 
     <View style = {styles.container}>
       <Text>Hook 페이지입니다.</Text>
     </View>
 
   );
 }
 
 const styles = StyleSheet.create({
   container : {
     flex : 1,
     alignItems : 'center',
     justifyContent : 'center'
 
 
   }
 });
 
 export default Hook;
 