import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack, {MainStackParamList} from './MainStack';
import {NestedNavigatorParams} from '../types/helpers';
import {UnauthenticatedStackParamList} from './Unauthenticated';

export type RootStackParamList = {
  Authenticated: NestedNavigatorParams<MainStackParamList>;
  Unauthenticated: NestedNavigatorParams<UnauthenticatedStackParamList>;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Authenticated" component={MainStack} />
    </RootStack.Navigator>
  );
};

export default RootScreen;
