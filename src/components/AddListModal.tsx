import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {AddShoppingListForm} from './AddShoppingListForm';

interface Props {
  modalizeRef: React.RefObject<Modalize>;
}

export const AddListModal = ({modalizeRef}: Props) => {
  const handleClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <Modalize ref={modalizeRef} adjustToContentHeight>
      <View style={styles.root}>
        <AddShoppingListForm closeModal={handleClose} />
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
});
