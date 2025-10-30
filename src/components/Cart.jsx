import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, decrement, increment } from "../slice/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const REM = (productId) => {
    dispatch(remove(productId));
  };
  const INCR = (productId) => {
    dispatch(increment(productId));
  };
  const DECR = (productId) => {
    dispatch(decrement(productId));
  };

  const finalTotal = cartItems.reduce(
    (total, product) =>
      total + (product.price ? product.price : 0) * (product.quantity || 1),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty 🛒</h2>
        <Link
          to="/Productlist"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition duration-200"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 pt-24 pb-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Your Shopping Cart 🛍️
      </h2>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {cartItems.map((product) => {
          const total =
            (product.price ? product.price : 0) * (product.quantity || 1);
          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-row"
            >
              {/* Image */}
              <div className="w-32 h-32 flex justify-center items-center bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {product.title}
                  </h3>
                  <h3 className="font-semibold text-indigo-600 text-lg">
                    ${product.price}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {product.category || "No Category"}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-200"
                    onClick={() => DECR(product.id)}
                  >
                    −
                  </button>
                  <span className="px-2 font-semibold">
                    {product.quantity || 1}
                  </span>
                  <button
                    className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-200"
                    onClick={() => INCR(product.id)}
                  >
                    +
                  </button>

                  <span className="ml-5 text-gray-700 font-semibold">
                    Total: ${total.toFixed(2)}
                  </span>

                  <button
                    className="ml-auto px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
                    onClick={() => REM(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Final Total + Checkout */}
      <div className="max-w-4xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/40">
        <h3 className="text-2xl font-bold text-gray-800">
          Final Total: <span className="text-indigo-600">${finalTotal.toFixed(2)}</span>
        </h3>

        <Link
          to="/checkout"
          className="mt-4 md:mt-0 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition duration-200"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
