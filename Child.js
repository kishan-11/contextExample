import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { TestContext } from './App';

export const Child = () => {
  return (
    <TestContext.Consumer>
      {(item) => {
        console.log('child', item)
        return (
          <View style={{backgroundColor: 'green', flex: 1}}>
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
