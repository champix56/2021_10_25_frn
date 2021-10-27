import {combineReducers, createStore} from 'redux';
const initialState = {
  products: [],
  filtredProducts: [],
  search: '',
};
const PRODUCTS_ACTIONS = Object.freeze({
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  SET_SEARCH: 'SET_SEARCH',
  INIT: 'INIT',
});
const reducerProduit = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
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
    case 'SET_WINDOW':
      console.log('%c%s', 'color:red', 'DATA' + action.type);
      return state;
    default:
      return state;
  }
};

const initialStateNav = {
  window: null,
};

const reducerNav = (state = initialStateNav, action) => {
  switch (action.type) {
    case 'SET_WINDOW':
      console.log('%c%s', 'color:red', 'NAV' + action.type);
      return {window: action.value};

    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({datas: reducerProduit, nav: reducerNav}),
);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({type: 'SET_WINDOW'});
store.dispatch({type: 'INNEXISTANT'});

store.dispatch({
  type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
  values: [
    {id: 0, name: 'au', prix: '', img: ''},
    {id: 2, name: 'ox', prix: '', img: ''},
    {id: 1, name: 'ua', prix: '', img: ''},
  ],
});
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
