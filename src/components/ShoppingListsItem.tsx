// import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
// import {MainStackParamList} from '../screens/MainStack';
import {NavigationProps} from '../helpers/hooks/useAppNavigation';

interface Props {
  name: string;
  id: number;
  // navigation: StackNavigationProp<
  //   MainStackParamList,
  //   'BottomTabNavigationStack',
  //   undefined
  // >;
  navigation: NavigationProps;
}

export const ShoppingListsItem = ({name, id, navigation}: Props) => {
  const handleNavigateToList = () => {
    console.log('przekieorwanie do', id);
    // navigation.navigate('ShoppingList', {
    //   id,
    // });
    navigation.navigate('Authenticated', {
      screen: 'ShoppingList',
      params: {
        id,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handleNavigateToList}>
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.9,
  },
  name: {
    fontSize: 21,
  },
});
