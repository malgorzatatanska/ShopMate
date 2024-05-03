import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../theme/theme';
import {LoginForm} from '../components';

export const Login = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Let's sign you in.</Text>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>Welcone back </Text>
          <Text style={styles.subtitle}>You have been missed! </Text>
        </View>
      </View>
      <View style={styles.formWrapper}>
        <LoginForm />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  wrapper: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: theme.fonts.bold.fontFamily,
    fontSize: 30,
  },
  subtitleView: {
    paddingTop: 10,
  },
  subtitle: {
    fontFamily: theme.fonts.regular.fontFamily,
    fontSize: 25,
    paddingTop: 2,
  },
  formWrapper: {
    flex: 0.6,
    paddingTop: 50,
  },
});
