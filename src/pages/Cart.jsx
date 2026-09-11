import { Link } from "react-router-dom";
import { useContext } from "react";
import PriceDetails from "../components/PriceDetails"
import ShopContext from "../contexts/ShopContext";

function Cart() {
  const { cart,increaseQuantity,decreaseQuantity, products} = useContext(ShopContext);

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