import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Checkbox} from 'react-native-paper';

interface Props {
  name: string;
  icon: IconProp;
}

export const ShoppingListItem = ({name, icon}: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.wrapper}>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <Checkbox.Android status="checked" color="gray" />
      </View>
    </View>
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
  icon: {
    paddingRight: 20,
  },
});
