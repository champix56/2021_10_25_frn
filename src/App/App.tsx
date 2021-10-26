/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {IProduct} from '../interfaces/IProduct';
import ProductSearch from './components/ProductSearch/ProductSearch';
import ProductsList from './components/ProductsList/ProductsList';
import {ADR_REST, RESSOURCES_NAME} from './config/config';
const initialState: Array<IProduct> = [];
const App = () => {
  // const [counter, setcounter] = useState(0);
  const [products, setproducts] = useState(initialState);
  const [filtredProduct, setfiltredProduct] = useState(initialState);
  const [search, setsearch] = useState('');
  useEffect(() => {
    console.log('Dans APP la search = ' + search);
    if (search.length === 0) {
      setfiltredProduct(products);
    } else {
      setfiltredProduct(
        products.filter(e => {
          return e.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        }),
      );
    }
  }, [search, products]);
  useEffect(() => {
    fetch(`${ADR_REST}${RESSOURCES_NAME.products}`)
      .then(f => f.json())
      .then(a => setproducts(a));
  }, []);
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ProductSearch
        value={search}
        onChange={(text: string) => {
          setsearch(text);
        }}
      />
      <Text>{search}</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductsList products={filtredProduct} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
