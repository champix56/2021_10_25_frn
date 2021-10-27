import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './store/store';

const NavApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default NavApp;
