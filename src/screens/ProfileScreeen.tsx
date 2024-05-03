import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from '../components';
import {theme} from '../theme/theme';
import {supabase} from '../../lib/supabase';

export const ProfileScreen = () => {
  const handleLogout = () => {
    supabase.auth.signOut();
  };
  return (
    <SafeAreaView style={style.root}>
      <View style={style.wrapper}>
        <Button
          label="Wyloguj"
          labelStyles={style.buttonLabel}
          buttonStyles={style.button}
          onPress={handleLogout}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonLabel: {
    fontFamily: theme.fonts.bodyMedium.fontFamily,
    fontSize: 20,
  },
  button: {
    padding: 20,
  },
});
