import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {
  faAppleWhole,
  faMugSaucer,
  faCheese,
} from '@fortawesome/free-solid-svg-icons';
import {theme} from '../theme/theme';
import {ShoppingListItem} from '../components';

const ShoppingListsScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.text}>Moje listy zakupów </Text>
      </View>
      <View style={styles.listView}>
        <ShoppingListItem icon={faAppleWhole} name="Jabłko" />
        <ShoppingListItem icon={faMugSaucer} name="Kawa" />
        <ShoppingListItem icon={faCheese} name="Ser" />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingListsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  listView: {
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.regular.fontFamily,
  },
});
