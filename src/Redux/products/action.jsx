import * as types from "./actionTypes";
import Axios from "axios";

//1.to get data on products page and filters on products page

//1.action function for products page
const fetchDataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
const fetchDataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};
//1.function for products page
const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    Axios.get("/products", {
      params: {
        ...payload,
      },
    })
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)));
  };
};

//2.for single product page
const getSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};

const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};
const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};
//2.function to get single product
const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  Axios.get(`/products/${id}`)
    .then((r) => dispatch(getSingleProductSuccess(r.data)))
    .catch((e) => dispatch(getSingleProductFailure(e.data)));
};

//3.TO get data in cart
const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};
const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};
//3. fucntion to get data in cart
const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());
  Axios.post("/cart", product)
    .then((r) => dispatch(addProductCartSuccess(r.data)))
    .catch((e) => dispatch(addProductCartFailure(e.data)));
};

// 4.Increase cart counter
const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_REQUEST,
    payload,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload,
  };
};
const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload,
  };
};
//4. fucntion to Increase cart counter
const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());
  Axios.get("/cart")
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};

//5. delete product from cart
const removeProductCartRequest = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};

const removeProductCartSuccess = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};
const removeProductCartFailure = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};
//5.  function  to delete product from cart
const removeProductCart = (id) => (dispatch) => {
  dispatch(removeProductCartRequest());
  Axios.delete(`/cart/${id}`)
    .then((r) => {
      // console.log(r.data);
      dispatch(removeProductCartSuccess(r.data));
    })
    .then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(removeProductCartFailure(e.data)));
};

// add order to database when order is ready to purchase
const addOrderRequest = () => {
  return {
    type: types.ADD_ORDER_REQUEST,
  };
};

const addOrderSuccess = (payload) => {
  return {
    type: types.ADD_ORDER_SUCCESS,
    payload,
  };
};
const addOrderFailure = (payload) => {
  return {
    type: types.ADD_ORDER_FAILURE,
    payload,
  };
};
// Function add order to database when order is ready to purchase
const addOrder = (payload) => (dispatch) => {
  dispatch(addOrderRequest());
  const orderPayload = [];
  for (let product of payload) {
    product && orderPayload.push(Axios.post("/orders", product));
  }
  Promise.all(orderPayload)
    .then((r) => {
      console.log(r);
      dispatch(addOrderSuccess());
    })
    .then(() => dispatch(emptyCart(payload))) // to empty the cart
    .catch((e) => dispatch(addOrderFailure()));
};

//7. removing items from cart when order go for purchase into the database

const emptyCartRequest = () => {
  return {
    type: types.EMPTY_CART_REQUEST,
  };
};
const emptyCartSuccess = () => {
  return {
    type: types.EMPTY_CART_SUCCESS,
  };
};
const emptyCartFailure = () => {
  return {
    type: types.EMPTY_CART_FAILURE,
  };
};
// 7. function to empty cart

const emptyCart = (payload) => (dispatch) => {
  dispatch(emptyCartRequest());
  const deleteOrders = [];
  for (let obj of payload) {
    let temp = dispatch(removeProductCart(obj.id));
    deleteOrders.push(temp);
  }

  Promise.all(deleteOrders)
    .then(() => dispatch(emptyCartSuccess()))
    .catch((e) => dispatch(emptyCartFailure()));
};

// 8.fetch data from chekout page to order page
const fetchOrdersRequest = (payload) => {
  return {
    type: types.FETCH_ORDERS_REQUEST,
    payload,
  };
};

const fetchOrdersSuccess = (payload) => {
  return {
    type: types.FETCH_ORDERS_SUCCESS,
    payload,
  };
};
const fetchOrdersFailure = (payload) => {
  return {
    type: types.FETCH_ORDERS_FAILURE,
    payload,
  };
};
//8. fucntion to fetch data from chekout page to order page
const fetchOrders = (payload) => (dispatch) => {
  dispatch(fetchOrdersRequest());
  Axios.get("/cart")
    .then((r) => dispatch(fetchOrdersSuccess(r.data)))
    .catch((e) => dispatch(fetchOrdersFailure(e.data)));
};

export {
  fetchData,
  getSingleProduct,
  addProductCart,
  fetchCart,
  removeProductCart,
  addOrder,
  emptyCart,
  fetchOrders,
};
