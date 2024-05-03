import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Text} from 'react-native-paper';
import {supabaseAddShoppingList} from '../helpers/queries/supabaseAddShoppingList';

const schema = yup
  .object({
    name: yup.string().required(),
  })
  .required();

interface IFormProps {
  name: string;
}

interface IAddShoppingListFormProps {
  closeModal: () => void;
}

export const AddShoppingListForm = ({
  closeModal,
}: IAddShoppingListFormProps) => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<IFormProps>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formData: IFormProps) => {
    setLoading(true);
    const {data, error} = await supabaseAddShoppingList(formData.name);
    if (data) {
      console.log('handled error', error);
      reset();
      setLoading(false);
      closeModal();
      // wyswietlic komunikat o dodaniu listy
    }
    if (error) {
      console.log('handled error', error);
      // wyswtetlic error message
      setLoading(false);
    }
  };
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Nazwa listy"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>To pole jest wymagane.</Text>}
      <View>
        <Button
          title="Dodaj"
          onPress={handleSubmit(onSubmit)}
          buttonStyle={styles.button}
          disabled={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: 'black',
    padding: 10,
  },
});
