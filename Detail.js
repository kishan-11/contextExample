import React, {memo, useEffect} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';

const Detail = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.setParams({
        timeStamp: 'abcd'
      })
    }, 2000)
  }, [])
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
      <Text> {`Detail' + ${props.route.params.timeStamp}`} </Text>
      <TouchableOpacity onPress={() => props.navigation.push('detail', {
        timeStamp: Date.now()
      })}>
        <Text> {'GO TO DETAIL'} </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text> {'GO Back'} </Text>
      </TouchableOpacity>
      <View style={{ height: 400, backgroundColor: 'red'}} />
      <View style={{ height: 400, backgroundColor: 'green'}} />
      <View style={{ height: 400, backgroundColor: 'red'}} />
      <View style={{ height: 400, backgroundColor: 'green'}} />
      <View style={{ height: 400, backgroundColor: 'red'}} />
    </ScrollView>
  );
};

export default memo(Detail);
