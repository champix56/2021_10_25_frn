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
import ProductSearch from './components/ProductSearch/ProductSearch';
import ProductsList from './components/ProductsList/ProductsList';
const initialState = [
  {
    id: 0,
    name: 'Triskel pendentif',
    prix: 10.0,
    img: 'https://i.picsum.photos/id/684/600/400.jpg?hmac=lEvIlDjUnUbB-FAHkYndJsgWtvRH2Wf651mXgX1hPFs',
  },
  {
    id: 1,
    name: 'Chouchen/hydromel',
    prix: 3.5,
    img: 'https://i.picsum.photos/id/684/600/400.jpg?hmac=lEvIlDjUnUbB-FAHkYndJsgWtvRH2Wf651mXgX1hPFs',
  },
  {
    id: 2,
    name: 'Drapeau gwen ha du',
    prix: 25,
    img: 'https://i.picsum.photos/id/684/600/400.jpg?hmac=lEvIlDjUnUbB-FAHkYndJsgWtvRH2Wf651mXgX1hPFs',
  },
];
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
          return e.name.includes(search);
        }),
      );
    }
  }, [search, products]);
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
