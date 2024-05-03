import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../theme/theme';

export const Header = (): JSX.Element => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Shop Mate </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  title: {
    fontFamily: theme.fonts.bold.fontFamily,
    fontSize: 20,
  },
});
