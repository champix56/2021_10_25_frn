import React, {useEffect, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import style from './ProductSearch.style';
interface Props {
  value: String;
}
//const initialState = {};
const ProductSearch = (props: Props) => {
  //const [state, setstate] = useState(initialState);
  // useEffect(() => {
  //   return () => {};
  // }, []);
  return (
    <View>
      <TextInput placeholder="Recherche"></TextInput>
      <Button title="Trouver" />
    </View>
  );
};

export default ProductSearch;
