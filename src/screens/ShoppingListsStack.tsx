import React from 'react';
import {Header} from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from './ProfileScreeen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAppleWhole,
  faMugSaucer,
  faCheese,
  IconDefinition,
  faDeafness,
} from '@fortawesome/free-solid-svg-icons';
import ShoppingListsScreen from './ShoppingListsScreen';

export type ShoppingListsStackParamList = {
  ShoppingLists: undefined;
  Profile: undefined;
};

const Stack = createBottomTabNavigator<ShoppingListsStackParamList>();

const BottomTabNavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        header: Header,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          let iconName: IconDefinition = faDeafness;
          if (route.name === 'ShoppingLists') {
            iconName = focused ? faAppleWhole : faMugSaucer;
          } else if (route.name === 'Profile') {
            iconName = focused ? faCheese : faCheese;
          }

          return <FontAwesomeIcon icon={iconName} />;
        },
      })}>
      <Stack.Screen name="ShoppingLists" component={ShoppingListsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default BottomTabNavigationStack;
