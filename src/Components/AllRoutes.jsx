import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Homepage from "../Pages/Homepage"
import { Products } from "../Pages/Products";
import Product from "../Pages/Product";
import Orders from "../Pages/Orders";
import Login from "../Pages/Login";
import AuthWrapper from "./AuthWrapper";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />
      <Route path="/orders/" element={<Orders />} />
      <Route path="/login/" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
