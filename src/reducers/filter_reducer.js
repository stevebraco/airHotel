import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    //Fetch all price 
    let maxPrice = action.payload.map((p) => p.price)
    // The maxPrice in my products
    maxPrice = Math.max(...maxPrice)
    console.log(maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters:{...state.filters, max_price: maxPrice, price: maxPrice}
    };
  }

  if(action.type === SET_GRIDVIEW) {
    return {...state, grid_view: true}
  }

  if(action.type === SET_LISTVIEW) {
    return {...state, grid_view: false}
  }

  if(action.type === UPDATE_SORT) {
    return {...state, sort: action.payload}
  }

  if(action.type === SORT_PRODUCTS) {
    const {sort, filtered_products} = state;
    let tempProducts = [...filtered_products];
    if(sort === 'price-lowest') {
      console.log('price-lowest');
      // I want to store them based on price by placing the smallest item first
      // We are comparing Two values, the current value and the next value
      tempProducts = tempProducts.sort((a,b) => a.price - b.price )
    }
    if(sort === 'price-highest') {
      // I want to store them based on price by placing the highest item first
      tempProducts = tempProducts.sort((a,b) => b.price - a.price )

      console.log('price-highest');
    }
    if(sort === 'name-a') {
      // sort alphabetically
      // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
      tempProducts = tempProducts.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
      console.log('name-a');
    }
    if(sort === 'name-z') {
      tempProducts = tempProducts.sort((a,b) => {
        return b.name.localeCompare(a.name)
      })
      console.log('name-z');
    }
    return {...state, filtered_products: tempProducts}
  }

  if(action.type === UPDATE_FILTERS) {
    const {name, value} = action.payload
    return {...state, filters:{...state.filters,[name]:value}}
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
