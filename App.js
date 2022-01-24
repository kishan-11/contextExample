import React, {createContext, useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import { Provider } from 'react-redux';
import Parent from './Parent';
import Parent1 from './Parent1';
import store from './store'

export const TestContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const contextValue = {
    theme,
    setTheme,
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <TestContext.Provider value={contextValue}> 
        <View style={{flex: 1, backgroundColor: 'grey'}}>
          <Parent />
          <Parent1 />
        </View>
      </TestContext.Provider> */}

      <Provider store={store}>
        <Parent />
        <Parent1 />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
