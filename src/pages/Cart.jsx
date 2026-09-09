import {Link} from "react-router-dom"

import ShopContext from "../contexts/ShopContext"
import { useContext } from "react";

const products = [
  // ---------------- GROCERY ----------------
  {
    id: 1,
    name: "Fresh Red Apple",
    category: "grocery",
    subCategory: "Fruits",
    price: 120,
    rating: 4.5,
    emoji: "🍎",
    stock: true,
  },
  {
    id: 2,
    name: "Fresh Banana",
    category: "grocery",
    subCategory: "Fruits",
    price: 60,
    rating: 4.3,
    emoji: "🍌",
    stock: true,
  },
  {
    id: 3,
    name: "Fresh Broccoli",
    category: "grocery",
    subCategory: "Vegetables",
    price: 90,
    rating: 4.4,
    emoji: "🥦",
    stock: true,
  },
  {
    id: 4,
    name: "Fresh Carrot",
    category: "grocery",
    subCategory: "Vegetables",
    price: 70,
    rating: 4.2,
    emoji: "🥕",
    stock: true,
  },
  {
    id: 5,
    name: "Potato Chips",
    category: "grocery",
    subCategory: "Snacks",
    price: 40,
    rating: 4.1,
    emoji: "🍿",
    stock: true,
  },
  {
    id: 6,
    name: "Orange Juice",
    category: "grocery",
    subCategory: "Beverages",
    price: 110,
    rating: 4.6,
    emoji: "🧃",
    stock: false,
  },

  // ---------------- FASHION ----------------
  {
    id: 7,
    name: "Classic T-Shirt",
    category: "fashion",
    subCategory: "Men",
    price: 599,
    rating: 4.3,
    emoji: "👕",
    stock: true,
  },
  {
    id: 8,
    name: "Blue Jeans",
    category: "fashion",
    subCategory: "Men",
    price: 1299,
    rating: 4.5,
    emoji: "👖",
    stock: true,
  },
  {
    id: 9,
    name: "Women's Dress",
    category: "fashion",
    subCategory: "Women",
    price: 1499,
    rating: 4.6,
    emoji: "👗",
    stock: true,
  },
  {
    id: 10,
    name: "Running Shoes",
    category: "fashion",
    subCategory: "Shoes",
    price: 1999,
    rating: 4.4,
    emoji: "👟",
    stock: true,
  },
  {
    id: 11,
    name: "Leather Handbag",
    category: "fashion",
    subCategory: "Bags",
    price: 1799,
    rating: 4.2,
    emoji: "👜",
    stock: false,
  },
  {
    id: 12,
    name: "Sunglasses",
    category: "fashion",
    subCategory: "Accessories",
    price: 799,
    rating: 4.1,
    emoji: "🕶️",
    stock: true,
  },

  // ---------------- ELECTRONICS ----------------
  {
    id: 13,
    name: "iPhone 15",
    category: "electronics",
    subCategory: "Mobiles",
    price: 59999,
    rating: 4.7,
    emoji: "📱",
    stock: true,
  },
  {
    id: 14,
    name: "Samsung Galaxy",
    category: "electronics",
    subCategory: "Mobiles",
    price: 39999,
    rating: 4.5,
    emoji: "📱",
    stock: true,
  },
  {
    id: 15,
    name: "HP Laptop",
    category: "electronics",
    subCategory: "Laptops",
    price: 54999,
    rating: 4.4,
    emoji: "💻",
    stock: true,
  },
  {
    id: 16,
    name: "iPad",
    category: "electronics",
    subCategory: "Tablets",
    price: 42999,
    rating: 4.6,
    emoji: "📲",
    stock: true,
  },
  {
    id: 17,
    name: "Sony Headphones",
    category: "electronics",
    subCategory: "Headphones",
    price: 7999,
    rating: 4.5,
    emoji: "🎧",
    stock: true,
  },
  {
    id: 18,
    name: "Smart Watch",
    category: "electronics",
    subCategory: "Smart Watches",
    price: 2999,
    rating: 4.2,
    emoji: "⌚",
    stock: true,
  },
];

function Cart() {
    const {cart} =useContext(ShopContext)
    console.log(cart)
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          My Cart
        </h1>

        <p className="text-gray-500 mt-2">
          {cart.length} item(s) in your cart
        </p>
      </div>

      {/* Cart Items */}
      <div className="max-w-5xl mx-auto space-y-4">

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="text-7xl mb-4">🛒</div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:shadow-md transition"
            >

              {/* Product Info */}
              <div className="flex items-center gap-5">

                {/* Product Emoji */}
                <Link to= "/products/${products.id}">
               
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-5xl">
                    {item.emoji}
                  </span>
                </div>
                 </Link>

                {/* Details */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="text-green-600 font-semibold mt-1">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Quantity: {item.quantity}
                  </p>

                  {/*  size available*/}
                  {item.size && (
                    <p className="text-gray-500 text-sm mt-1">
                      Size: {item.size}
                    </p>
                  )}
                </div>

              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  Total
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  ₹{item.price * item.quantity}
                </p>
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  
  );
}

export default Cart;