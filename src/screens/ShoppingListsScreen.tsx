import React, {useRef, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Portal, Text} from 'react-native-paper';
import {Modalize} from 'react-native-modalize';
import {theme} from '../theme/theme';
import {AddListModal, Button, ShoppingListsItem} from '../components';
import {QueryData} from '@supabase/supabase-js';
import {supabseShoppingListsQuery} from '../helpers/queries';
import {useAppNavigation, useShoppingListChanges} from '../helpers/hooks';

export type ShoppingListsQueryType = QueryData<
  typeof supabseShoppingListsQuery
>;

const ShoppingListsScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const modalizeRef = useRef<Modalize>(null);
  const navigation = useAppNavigation();

  const {shoppingData, setShoppingData} = useShoppingListChanges();

  const handleRefreshLists = async () => {
    setIsRefreshing(true);
    let {data, error} = await supabseShoppingListsQuery;

    if (data) {
      console.log(data);
      setShoppingData(data);
    }
    if (error) {
      console.log(error);
    }

    setIsRefreshing(false);
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <SafeAreaView style={styles.root}>
        <View>
          <Text style={styles.text}>Moje listy zakupów </Text>
        </View>
        <View style={styles.listView}>
          <FlatList
            data={shoppingData}
            renderItem={({item}) => (
              <ShoppingListsItem
                name={item.title ?? ''}
                key={item.id}
                id={item.id}
                navigation={navigation}
              />
            )}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefreshLists}
              />
            }
          />
        </View>
        <View style={styles.floatingButtonWrapper}>
          <Button
            label="+"
            onPress={onOpen}
            buttonStyles={styles.floatingButton}
            labelStyles={styles.floatingButtonLabel}
          />
        </View>
        <Portal>
          <AddListModal modalizeRef={modalizeRef} />
        </Portal>
      </SafeAreaView>
    </>
  );
};

export default ShoppingListsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    position: 'relative',
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
