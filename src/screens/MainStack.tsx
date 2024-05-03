import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigationStack from './ShoppingListsStack';
import ShoppingListScreen from './ShoppingListScreen';

export type MainStackParamList = {
  BottomTabNavigationStack: undefined;
  ShoppingList: {
    id: number;
  };
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigationStack"
        component={BottomTabNavigationStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
