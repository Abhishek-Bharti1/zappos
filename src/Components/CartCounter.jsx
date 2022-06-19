import React from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Redux/products/action";
import { useEffect } from "react";

const CartCounter = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCart());
    }
  }, [cart?.length, dispatch]);
  // console.log(cart);

  return <Box textColor="black">{cart?.length ? cart.length : 0}</Box>;
};

export default CartCounter;
