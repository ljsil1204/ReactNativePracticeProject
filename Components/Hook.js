/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState, useEffect } from 'react';
import {StyleSheet, View, Text, Button, FlatList,} from 'react-native';


// 클래스형 컴포넌트
// class Hook extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       name : 'lee'
//     }
//   }

//   changeName = () => {
//     this.setState({
//       name : 'sil'
//     })
//   }

//   render(){

//     return(
//       <View style = {styles.container}>
//         <Text>Hook 페이지입니다.</Text>
//         <Text>{this.state.name}님</Text>
//         <Button title='이름수정' onPress={() => this.changeName()}></Button>
//       </View>
//     );

//   }

// }


// 함수형 컴포넌트
const Hook: () => Node = () => {

  const[name, setName] = useState('jin');

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      setUsers(users);
      setLoading(false);
    });
  });

  return (

    <View style = {styles.container}>
      <Text>Hook 페이지입니다.</Text>
      <Text>{name}님</Text>
      <Button title='이름수정' onPress={() => setName('sil')}></Button>

      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text> }
        keyExtractor={item => item.id}
      />
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
 