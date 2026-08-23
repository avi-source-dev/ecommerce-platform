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
    const[cart,setCart] = useState([])
  

  // {
  //   id: 1,
  //   name: "Fresh Red Apple",
  //   category: "grocery",
  //   subCategory: "Fruits",
  //   price: 120,
  //   rating: 4.5,
  //   emoji: "🍎",
  //   stock: true,
  // }

   function addCarditem(item) {
  setCart((prevCart) => {

    const existingItem = prevCart.find(
      (cartItem) => cartItem.id === item.id
      //  ===item.id = 1
    );

         // Product already cart me hai
    if (existingItem) {
      return prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    }

    // Product pehli baar add ho raha hai
    return [
      ...prevCart,
      {
        id: item.id,
        name: item.name,
        price: item.price,
        emoji: item.emoji,
        quantity: 1,
      },
    ];
  });
}
  return (
    <Routes>
      {/* Main */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/> } />
        <Route path="/category" element={<Category/>}/>
        <Route path="/category/:categoryId" element={<CategoryProductsPage/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails addCarditem={addCarditem} />}/>
        <Route path="/cart" element={<Cart itemCart={cart}/>} />
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