import {supabase} from '../../../lib/supabase';

export const supabaseAddShoppingList = async (name: string) => {
  const user_id = (await supabase.auth.getSession()).data.session?.user.id;

  if (!user_id) {
    return {data: null, error: 'User not found'};
  }

  try {
    const {data, error} = await supabase
      .from('shoppingList')
      .insert({title: name, user_id})
      .select();

    return {data, error};
  } catch (error) {
    return {error, data: null};
  }
};
