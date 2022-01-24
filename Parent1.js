import React, { memo } from 'react';
import {View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Child1 } from './Child1';

const Parent1 = () => {
  console.log('parent rendered')
  const dispatch = useDispatch()
  const state = useSelector(({ home }) => {
    return home.y
  })
  console.log('parent 1', state)
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      {/* <Child1 /> */}
    </View>
  );
};

export default memo(Parent1)
