import {resolvePreset} from '@babel/core';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
interface Props {
  value: string;
  onChange: Function;
}
const ProductSearch = (props: Props) => {
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Recherche"
        style={style.searchInput}
        value={props.value}
        onChangeText={textValue => {
          console.log(textValue);
          props.onChange(textValue);
        }}
      />
      {/* <View style={style.searchButton}>
        <Button title="go" />
      </View> */}
    </View>
  );
};
const style = StyleSheet.create({
  searchButton: {
    width: 45,
  },
  searchInput: {
    flexGrow: 1,
    borderWidth: 1,
    height: 35,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});
export default ProductSearch;
