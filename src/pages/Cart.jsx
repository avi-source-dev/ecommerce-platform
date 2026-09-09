import { Link } from "react-router-dom";
import { useContext } from "react";
import PriceDetails from "../components/PriceDetails"

import ShopContext from "../contexts/ShopContext";

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
  const { cart,increaseQuantity,decreaseQuantity } = useContext(ShopContext);

  // Find product details
  const getProduct = (id) => {
    return products.find((product) => product.id === id);
  };

return (
  <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">

    {/* Heading */}
    <div className="max-w-6xl mx-auto mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        My Cart
      </h1>

      <p className="text-gray-500 mt-2">
        {cart.length} item(s) in your cart
      </p>
    </div>

    {/* Main Cart Layout */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT SIDE - Cart Items */}
      <div className="lg:col-span-2 space-y-4">

        {cart.length === 0 ? (

          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="text-7xl mb-4">🛒</div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>

        ) : (

          cart.map((item) => {
            const product = getProduct(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:shadow-md transition duration-200"
              >

                {/* Product Info */}
                <div className="flex items-center gap-4 sm:gap-5">

                  <Link to={`/products/${item.id}`}>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition">
                      <span className="text-4xl sm:text-5xl">
                        {product?.emoji || item.emoji}
                      </span>
                    </div>
                  </Link>

                  {/* Details */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="text-green-600 font-semibold mt-1">
                      ₹{item.price}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      Quantity: {item.quantity}
                    </p>

                    {item.size && (
                      <p className="text-gray-500 text-sm mt-1">
                        Size: {item.size}
                      </p>
                    )}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit bg-white shadow-sm">

                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center text-xl font-semibold text-gray-700 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 transition"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-12 h-10 text-center border-x border-gray-300 outline-none text-gray-800 font-medium"
                  />

                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center text-xl font-semibold text-gray-700 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 transition"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

                {/* Price */}
                <div className="text-left md:text-right">
                  <p className="text-sm text-gray-500">
                    Total
                  </p>

                  <p className="text-2xl font-bold text-gray-900">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

              </div>
            );
          })
        )}
      </div>


      {/* RIGHT SIDE - Price Details */}
      {cart.length > 0 && (
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-6">
            <PriceDetails />
          </div>
        </div>
      )}

    </div>
  </div>
);
}

export default Cart;
