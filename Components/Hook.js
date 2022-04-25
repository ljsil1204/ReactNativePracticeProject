/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

  import type {Node} from 'react';
  import React, {Fragment, Component } from 'react';
  import {StyleSheet, View, Text, Button,} from 'react-native';


  // 클래스형 컴포넌트
  class Hook extends Component {

    constructor(props){
      super(props);
      this.state = {
        name : 'lee'
      }
    }

    changeName = () => {
      this.setState({
        name : 'sil'
      })
    }
 
    render(){

      return(
        <View style = {styles.container}>
          <Text>Hook 페이지입니다.</Text>
          <Text>{this.state.name}님</Text>
          <Button title='이름수정' onPress={() => this.changeName()}></Button>
        </View>
      );

    }

  }


  // 함수형 컴포넌트
  // const Hook: () => Node = () => {
  //   return (
  
  //     <View style = {styles.container}>
  //       <Text>Hook 페이지입니다.</Text>
  //     </View>
  
  //   );
  // }
 
  const styles = StyleSheet.create({
    container : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
  
  
    }
  });
  
  export default Hook;
 