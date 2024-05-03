import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './Login';

export type UnauthenticatedStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<UnauthenticatedStackParamList>();

const Unauthenticated = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Unauthenticated;
