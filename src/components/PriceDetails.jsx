import React, { useContext } from "react";
import ShopContext from "../contexts/ShopContext";

function PriceDetails() {
  const { cart } = useContext(ShopContext);

  const totalAmount = cart.map(
    (item) => item.price * item.quantity
  );

  let total = 0;
  let discount = 400;
  let deliveryCharge = 40;
  let finalTotal = 0;

  for (let i = 0; i < totalAmount.length; i++) {
    total = total + totalAmount[i];
  }

  finalTotal = total + deliveryCharge - discount;

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-5">
      
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800 pb-4 border-b border-gray-200">
        PRICE DETAILS
      </h2>

      {/* Price */}
      <div className="flex justify-between items-center mt-5 text-sm text-gray-700">
        <p>Price ({cart.length} items)</p>
        <span>₹{total}</span>
      </div>

      {/* Discount */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
        <p>Discount</p>
        <span className="text-green-600">
          - ₹{discount}
        </span>
      </div>

      {/* Delivery Charges */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
        <p>Delivery Charges</p>

        <span className="text-green-600">
          {deliveryCharge === 0
            ? "FREE"
            : `₹${deliveryCharge}`}
        </span>
      </div>

      {/* Divider */}
      <hr className="my-5 border-gray-200" />

      {/* Total */}
      <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
        <h3>Total Amount</h3>
        <span>₹{finalTotal}</span>
      </div>

      {/* Saving Message */}
      <p className="mt-5 text-sm font-medium text-green-600 bg-green-50 rounded-md p-3">
        You will save ₹{discount} on this order
      </p>
    </div>
  );
}

export default PriceDetails;