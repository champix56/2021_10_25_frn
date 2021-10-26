import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import style from './ProductsList.style';
import ProductItemList from '../ProductItemList/ProductItemList';
interface Props {
  products: Array<any>;
}

const ProductsList = (props: Props) => {
  return (
    <View style={style.listContainer}>
      {props.products.map((e, i) => (
        <ProductItemList product={e} key={'prod-' + i} />
      ))}
    </View>
  );
};
const style = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default ProductsList;
