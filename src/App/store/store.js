import React from 'react';
import {combineReducers, createStore} from 'redux';
import MainActivity from '../components/MainActivity/MainActivity';
import {ADR_REST, RESSOURCES_NAME} from '../config/config';
const initialState = {
  products: [],
  filtredProducts: [],
  search: '',
};
export const PRODUCTS_ACTIONS = Object.freeze({
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  SET_SEARCH: 'SET_SEARCH',
  INIT: 'INIT',
});
let interv = undefined;
const reducerProduit = (state = initialState, action) => {
  console.log(action.type);
  const type = action.type.includes('@@redux/INIT')
    ? 'START_PULLING'
    : action.type;
  switch (type) {
    case PRODUCTS_ACTIONS.INIT:
      fetch(`${ADR_REST}${RESSOURCES_NAME.products}`)
        .then(f => f.json())
        .then(a =>
          store.dispatch({type: PRODUCTS_ACTIONS.ADD_PRODUCTS, values: a}),
        );
      return state;
    case 'START_PULLING':
      interv = interv
        ? interv
        : setInterval(() => {
            store.dispatch({type: PRODUCTS_ACTIONS.INIT});
          }, 1000);
      return state;
    case 'STOP_PULLING':
      interv = interv ? clearInterval(interv) : null;
      return state;
    case PRODUCTS_ACTIONS.ADD_PRODUCTS:
      return {
        ...state,
        products: action.values,
        filtredProducts: action.values,
      };
    case PRODUCTS_ACTIONS.SET_SEARCH:
      return {
        ...state,
        search: action.value,
        filtredProducts:
          action.value.length > 0
            ? state.products.filter(e =>
                e.name
                  .toLocaleLowerCase()
                  .includes(action.value.toLocaleLowerCase()),
              )
            : state.products,
      };
    default:
      return state;
  }
};

const initialStateNav = {
  window: <MainActivity />,
};

const reducerNav = (state = initialStateNav, action) => {
  switch (action.type) {
    case 'SET_WINDOW':
      return {window: action.value};
    case 'GO_HOME':
      return {window: <MainActivity />};
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({datas: reducerProduit, nav: reducerNav}),
);

//store.dispatch({type: PRODUCTS_ACTIONS.INIT});
// store.dispatch({
//   type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
//   values: [
//     {id: 0, name: 'au', prix: '', img: ''},
//     {id: 2, name: 'ox', prix: '', img: ''},
//     {id: 1, name: 'ua', prix: '', img: ''},
//   ],
// });
// store.dispatch({
//   type: PRODUCTS_ACTIONS.SET_SEARCH,
//   value: 'u',
// });
// store.dispatch({
//   type: PRODUCTS_ACTIONS.SET_SEARCH,
//   value: '',
// });

// let state = reducerProduit(undefined, {
//   type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
//   values: [
//     {id: 0, name: 'au', prix: '', img: ''},
//     {id: 2, name: 'ox', prix: '', img: ''},
//     {id: 1, name: 'ua', prix: '', img: ''},
//   ],
// });
// console.log(state);

// state = reducerProduit(state, {
//   type: PRODUCTS_ACTIONS.SET_SEARCH,
//   value: 'u',
// });

// console.log(state);

// state = reducerProduit(state, {
//   type: PRODUCTS_ACTIONS.SET_SEARCH,
//   value: '',
// });

// console.log(state);
