import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import App from './App';
import {theme} from './src/theme/theme';
import {RootStackParamList} from './src/screens/RootScreen';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['shoppinglist://'],
  config: {
    screens: {
      Authenticated: {
        path: 'Authenticated',
        screens: {
          BottomTabNavigationStack: {
            path: 'ShoppingLists',
          },
        },
      },
      Unauthenticated: {
        path: 'Unauthenticated',
        screens: {
          Login: {
            path: 'Login',
          },
        },
      },
    },
  },
};

const BaseApp = () => {
  return (
    <NavigationContainer linking={linking}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default BaseApp;
