/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Provider} from 'react-redux';
import ProductEditor from './components/ProductEditor/ProductEditor';
import ProductSearch from './components/ProductSearch/ProductSearch';
import ProductsList from './components/ProductsList/ProductsList';
import {store} from './store/store';

const App = () => {
  // useEffect(() => {
  //   store.subscribe(() => {
  //     console.log(store.getState());
  //   });dolmen
  // }, []);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ProductEditor
          produit={{
            id: 0,
            name: 'nme1',
            img: 'https://www.phares-de-france-en-resine.fr/2598-thickbox_default/dolmen-an-daol-vaen.jpg',
            prix: 15.23,
          }}
        />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
