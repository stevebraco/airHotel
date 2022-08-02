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
  // When action === LOAD_PRODUCTS, I load my product
  if (action.type === LOAD_PRODUCTS) {
    //Fetch all price 
    let maxPrice = action.payload.map((p) => p.price)
    // Whe always search my highest price in my product
    // Math.max for fetch the highest price
    maxPrice = Math.max(...maxPrice)
    console.log(maxPrice);
    return {
      ...state,
      // ...action.payload = all products
      all_products: [...action.payload],
      // we need the all product fort filter the products
      filtered_products: [...action.payload],
      // we update the filters and the maxPrice and the price dynamically
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
    console.log('filter_reducer',name, value);
    return {...state, filters:{...state.filters,[name]:value}}
  }

  if(action.type === FILTER_PRODUCTS) {
    console.log('Filter Products');
    const {all_products} = state
    const {text, category, company, color, price, shipping} = state.filters
    let tempProducts = [...all_products]
    //filtering
    //text
    if(text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }

    //category
    if(category !== 'all') {
      tempProducts = tempProducts.filter(product => product.category === category)
    }

    //company 
    if(company !== 'all') {
      tempProducts = tempProducts.filter(product => product.company === company)
    }

    //colors
    if(color !== 'all' ) {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }

    //price
      tempProducts = tempProducts.filter((product) => product.price <= price )
    //shipping
    if(shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }

    return {...state, filtered_products: tempProducts}
  }


  if(action.type === CLEAR_FILTERS) {
    return { ...state, filters: {
      ...state.filters,
      text: '',
      company: 'all',
      category: 'all',
      color: 'all',
      price: state.filters.max_price,
      shipping: false,
    }}
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
