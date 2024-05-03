import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack, {MainStackParamList} from './MainStack';
import {NestedNavigatorParams} from '../types/helpers';
import Unauthenticated, {
  UnauthenticatedStackParamList,
} from './Unauthenticated';
import {supabase} from '../../lib/supabase';
import {Session} from '@supabase/supabase-js';
import {AppState} from 'react-native';

export type RootStackParamList = {
  Authenticated: NestedNavigatorParams<MainStackParamList>;
  Unauthenticated: NestedNavigatorParams<UnauthenticatedStackParamList>;
};

const RootStack = createStackNavigator<RootStackParamList>();

AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const RootScreen = () => {
  const [session, setSession] = useState<Session | null>(null);

  console.log('session', session);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    const {data} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      data?.subscription.unsubscribe;
    };
  }, []);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {session ? (
        <RootStack.Screen name="Authenticated" component={MainStack} />
      ) : (
        <RootStack.Screen name="Unauthenticated" component={Unauthenticated} />
      )}
    </RootStack.Navigator>
  );
};

export default RootScreen;
