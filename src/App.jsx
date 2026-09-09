import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Category from "./pages/Category"
import CategoryProductsPage from "./pages/CategoryProductsPage"
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"

const App = () => {

  return (
    <Routes>
      {/* Main */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/> } />
        <Route path="/category" element={<Category/>}/>
        <Route path="/category/:categoryId" element={<CategoryProductsPage/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Route>

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

    </Routes>
  );
};

export default App;