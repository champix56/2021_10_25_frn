/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Button from './components/Button';
import ProductsList from './components/ProductsList/ProductsList';
const initialState = [
  {
    id: 0,
    name: 'Triskel pendentif',
    prix: 10.0,
    img: 'https://www.celaur.fr/app/uploads/2018/11/00574.jpg',
  },
  {
    id: 1,
    name: 'Chouchen/hydromel',
    prix: 3.5,
    img: 'http://www.ruche-ansoise.com/27-thickbox_default/hydromel-doux-75cl.jpg',
  },
  {
    id: 2,
    name: 'Drapeau gwen ha du',
    prix: 25,
    img: 'https://assets.bigcartel.com/product_images/226943573/drapeau-breton-pas-cher-gwenn-ha-du-banniel-breizh.jpg?auto=format&fit=max&w=2000',
  },
];
const App = () => {
  const [counter, setcounter] = useState(0);
  const [products, setproducts] = useState(initialState);
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductsList products={products} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
