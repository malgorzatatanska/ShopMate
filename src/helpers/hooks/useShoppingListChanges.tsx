import {useEffect, useState} from 'react';
import {supabase} from '../../../lib/supabase';
import {ShoppingListsQueryType} from '../../screens/ShoppingListsScreen';
import {supabseShoppingListsQuery} from '../queries';

export const useShoppingListChanges = () => {
  const [shoppingData, setShoppingData] =
    useState<ShoppingListsQueryType | null>(null);

  useEffect(() => {
    const handleGetShoppingLists = async () => {
      let {data, error} = await supabseShoppingListsQuery;
      if (data) {
        console.log(data);
        setShoppingData(data);
      }
      if (error) {
        console.log(error);
      }
    };
    handleGetShoppingLists();
  }, []);

  useEffect(() => {
    const channels = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        {event: '*', schema: 'public', table: 'shoppingList'},
        payload => {
          console.log('Change received!', payload);

          setShoppingData(prev => {
            const safePrev = prev || [];

            if (payload.eventType === 'INSERT') {
              return [
                ...safePrev,
                {
                  id: payload.new?.id,
                  title: payload.new?.title,
                },
              ];
            }
            if (payload.eventType === 'DELETE') {
              const changedTable = prev?.filter(
                item => item.id !== payload.old?.id,
              );

              if (changedTable) return changedTable;
            }
            if (payload.eventType === 'UPDATE') {
              const changedData = prev?.map(item => {
                console.log(item.id, payload.new?.id);
                if (item.id === payload.new?.id) {
                  return {
                    ...item,
                    title: payload.new?.title,
                  };
                }
                return item;
              });
              if (changedData) {
                return changedData;
              }
            }
            return prev;
          });
        },
      )
      .subscribe();

    return () => {
      channels.unsubscribe();
    };
  }, []);

  return {shoppingData, setShoppingData};
};
