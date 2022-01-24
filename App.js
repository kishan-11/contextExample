import React, {createContext, useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Parent from './Parent';
import Parent1 from './Parent1';

export const TestContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const contextValue = {
    theme,
    setTheme,
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TestContext.Provider value={contextValue}> 
        <View style={{flex: 1, backgroundColor: 'grey'}}>
          <Parent />
          <Parent1 />
        </View>
      </TestContext.Provider>
    </SafeAreaView>
  );
};

export default App;
