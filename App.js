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
   TextInput,
 } from 'react-native';
 
 import Hook from './Components/Hook';

 const Stack = createNativeStackNavigator();
 
 function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      alert('값이 있다');
    } else {
      alert('값이 없다.')
    }

  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
 
 const App: () => Node = () => {
   return (
 
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
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
 