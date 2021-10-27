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
import ProductSearch from './components/ProductSearch/ProductSearch';
import ProductsList from './components/ProductsList/ProductsList';
import {store} from './store/store';

const App = () => {
  // useEffect(() => {
  //   store.subscribe(() => {
  //     console.log(store.getState());
  //   });
  // }, []);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ProductSearch />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ProductsList />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};
export default App;
