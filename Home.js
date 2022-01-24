import { useNavigation } from '@react-navigation/native';
import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Home = (props) => {
  // push
  // pop 
  // navigate
  // goBack
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> {'Home'} </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('detail', {
        timeStamp: Date.now()
      })}>
        <Text> {'GO TO DETAIL'} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Home);
