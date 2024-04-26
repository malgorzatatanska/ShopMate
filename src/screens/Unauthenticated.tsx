import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingListsScreen from './ShoppingListScreen';

export type UnauthenticatedStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<UnauthenticatedStackParamList>();

const Unauthenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ShoppingListsScreen} />
      <Stack.Screen name="Register" component={ShoppingListsScreen} />
    </Stack.Navigator>
  );
};

export default Unauthenticated;
