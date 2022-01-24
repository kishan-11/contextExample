import React, { memo } from 'react';
import {View} from 'react-native';
import { Child1 } from './Child1';

const Parent1 = () => {
  console.log('parent rendered')
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Child1 />
    </View>
  );
};

export default memo(Parent1)
