import React from 'react';
import {Button, ScrollView} from 'react-native';
import {store} from '../../store/store';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductsList from '../ProductsList/ProductsList';

const ProductListWithSearch = () => {
  return (
    <>
      <ProductSearch />
      <ProductsList />
      <Button
        title={'retour'}
        onPress={() => {
          store.dispatch({type: 'GO_HOME'});
        }}
      />
    </>
  );
};

export default ProductListWithSearch;
