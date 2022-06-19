import * as types from "./actionTypes";

const initialState = {
  products: [],
  error: "",
  currentProduct: {}, //2.to get single product
  loading: false,
  cart: [], // to get data in cart
  orders: [],
};
const reducer = (state = initialState, action) => {
  //1.to get data on products page
  const { type, payload } = action;
  switch (type) {
    //1.TO GET  data for the products page
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        error: "",
        loading: false,
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    //2.to get data for the product page
    case types.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        error: "",

        loading: true,
      };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        error: "",
        currentProduct: payload,
        loading: false,
      };
    case types.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    //3.adding product to cart
    case types.ADD_PRODUCT_CART_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        error: "",
        cart: [...state.cart, payload],
        loading: false,
      };
    case types.ADD_PRODUCT_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    //4.increase cart counter
    case types.FETCH_CART_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        error: "",
        cart: [...payload],
        loading: false,
      };
    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    // remove from cart
    case types.REMOVE_PRODUCT_CART_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };

    case types.REMOVE_PRODUCT_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    //8. fucntion to fetch data from chekout page to order page
    case types.FETCH_ORDERS_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        error: "",
        orders: [...payload],
        loading: false,
      };
    case types.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }

  //8.
};

export default reducer;
