import React, { memo } from 'react';
import {View} from 'react-native';
import {Child} from './Child';

const Parent = () => {
  console.log('parent1 rendered')
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Child />
    </View>
  );
};

export default memo(Parent)
