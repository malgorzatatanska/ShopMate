import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {faAppleWhole} from '@fortawesome/free-solid-svg-icons';
import {theme} from '../theme/theme';
import {Button, ShoppingListItem} from '../components';
import {supabase} from '../../lib/supabase';
import {QueryData} from '@supabase/supabase-js';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from './MainStack';

const supabseShoppingListQuery = supabase
  .from('shoppingListProducts')
  .select(
    `
    shoppingList(title, id),
    product(name)
    `,
  )
  .eq('shopping_list_id', '2');

type ShoppingListQueryType = QueryData<typeof supabseShoppingListQuery>;

type Props = {} & StackScreenProps<MainStackParamList, 'ShoppingList'>;

const ShoppingListScreen = ({route}: Props) => {
  const {id} = route.params;
  const [shoppingData, setShoppingData] =
    useState<ShoppingListQueryType | null>(null);

  const tranformData = shoppingData?.map(item => {
    return {
      product: item.product?.name,
    };
  });
  console.log('tranformData', tranformData);

  useEffect(() => {
    const handleGetShoppingListData = async () => {
      let {data, error} = await supabase
        .from('shoppingListProducts')
        .select(
          `
        shoppingList(title, id),
        product(name)
        `,
        )
        .eq('shopping_list_id', id);

      if (data) {
        console.log(data);
        setShoppingData(data);
      }
      if (error) {
        console.log(error);
      }
    };

    handleGetShoppingListData();
  }, [id]);

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.text}>Moje listy zakupów </Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={tranformData}
          renderItem={({item}) => (
            <ShoppingListItem icon={faAppleWhole} name={item.product ?? ''} />
          )}
        />
      </View>
      <View style={styles.floatingButtonWrapper}>
        <Button
          label="+"
          onPress={() => null}
          buttonStyles={styles.floatingButton}
          labelStyles={styles.floatingButtonLabel}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingListScreen;

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
  floatingButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    bottom: 50,
    right: 30,
    elevation: 3,
    shadowColor: 'black',
    borderRadius: 30,
    padding: 1,
  },
  floatingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#381190',
  },
  floatingButtonLabel: {
    padding: 0,
    fontSize: 20,
    fontWeight: '600',
  },
});
