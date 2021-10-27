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
    default:
      return state;
  }
};

let state = reducerProduit(undefined, {
  type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
  values: [
    {id: 0, name: 'au', prix: '', img: ''},
    {id: 2, name: 'ox', prix: '', img: ''},
    {id: 1, name: 'ua', prix: '', img: ''},
  ],
});
console.log(state);

state = reducerProduit(state, {
  type: PRODUCTS_ACTIONS.SET_SEARCH,
  value: 'u',
});

console.log(state);

state = reducerProduit(state, {
  type: PRODUCTS_ACTIONS.SET_SEARCH,
  value: '',
});

console.log(state);
