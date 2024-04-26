import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingListsScreen from './ShoppingListScreen';

export type MainStackParamList = {
  ShoppingLists: undefined;
  ShoppingList: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingLists"
        component={ShoppingListsScreen}
        options={{
          headerTitle: 'Moje listy zakupów',
        }}
      />
      <Stack.Screen name="ShoppingList" component={ShoppingListsScreen} />
      <Stack.Screen name="Profile" component={ShoppingListsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
