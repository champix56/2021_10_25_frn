import React from 'react';
import {View, Text} from 'react-native';
import style from './ProductsList.style';
import ProductItemList from '../ProductItemList/ProductItemList';
interface Props {
  products: Array<any>;
}

const ProductsList = (props: Props) => {
  return (
    <View>
      {props.products.map((e, i) => (
        <ProductItemList product={e} key={'prod-' + i} />
      ))}
    </View>
  );
};

export default ProductsList;
