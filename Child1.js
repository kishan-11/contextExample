import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { TestContext } from './App';

export const Child1 = () => {
  return (
    <TestContext.Consumer>
      {(item) => {
        console.log('child1', item)
        return (
          <View style={{backgroundColor: 'blue', flex: 1}}>
            <TouchableOpacity
              onPress={() => item.setTheme(item.theme === 'light' ? 'dark' : 'light')}
              style={{height: 200, width: 200, backgroundColor: item.theme === 'light' ? 'white' : 'black'}}
            />
          </View>
        )
      }}
    </TestContext.Consumer>
  )
};
