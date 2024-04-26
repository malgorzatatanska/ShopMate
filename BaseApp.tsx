import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import App from './App';
import {theme} from './src/theme/theme';

const BaseApp = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default BaseApp;
