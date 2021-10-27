import React from 'react';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductsList from '../ProductsList/ProductsList';

const ProductListWithSearch = () => {
  return (
    <>
      <ProductSearch />
      <ProductsList />
    </>
  );
};

export default ProductListWithSearch;
