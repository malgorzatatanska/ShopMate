import {supabase} from '../../../lib/supabase';

export const supabseShoppingListsQuery = supabase
  .from('shoppingList')
  .select(`title, id`);
