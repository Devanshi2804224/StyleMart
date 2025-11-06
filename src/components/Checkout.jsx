import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, remove } from "../slice/CartSlice";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51SNrJEQMh7b2KXztNBWjiNtUvPuK0QrYYgktNQ36ByH9H3udUj42wCCEVgfTlCCfxzKXcMw04ywhEwAgaa66Zo7C005JYjHsPb"
);

// ------------------------
//  Fake Frontend Payment Form
// ------------------------
const PaymentForm = ({ total }) => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000));
    setMessage(`✅ Payment of $${total.toFixed(2)} simulated successfully!`);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md bg-white/80 p-6 rounded-2xl shadow-lg border border-gray-200"
    >
      <p className="text-gray-700 text-center mb-2 text-sm sm:text-base">
        (Test mode — no real payment)
      </p>

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition duration-200 w-full"
      >
        {loading ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </button>

      {message && (
        <p className="text-green-700 mt-3 text-center text-sm sm:text-base">
          {message}
        </p>
      )}
    </form>
  );
};

// ------------------------
//  Main Checkout Component
// ------------------------
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const finalTotal = cartItems.reduce(
    (total, product) =>
      total + (product.price ? product.price : 0) * (product.quantity || 1),
    0
  );

  const handleIncrement = (id) => dispatch(increment(id));
  const handleDecrement = (id) => dispatch(decrement(id));
  const handleRemove = (id) => dispatch(remove(id));

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Your Cart is Empty 🛒
        </h2>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 pt-24 pb-20 px-4 sm:px-6 lg:px-10 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
        Checkout 🛒
      </h2>

      {/* CART ITEMS */}
      <div className="w-full max-w-6xl flex flex-col gap-6 overflow-y-auto">
        {cartItems.map((product) => {
          const total =
            (product.price ? product.price : 0) * (product.quantity || 1);
          return (
            <div
              key={product.id}
              className="flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg border border-white/30 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="md:w-64 h-60 sm:h-64 flex justify-center items-center bg-gray-100 p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain transform transition duration-300 hover:scale-105"
                />
              </div>

              {/* DETAILS */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-3">
                    {product.description || "No description available."}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
                    <button
                      onClick={() => handleDecrement(product.id)}
                      className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-200"
                    >
                      −
                    </button>
                    <span className="px-2 font-semibold">
                      {product.quantity || 1}
                    </span>
                    <button
                      onClick={() => handleIncrement(product.id)}
                      className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-200"
                    >
                      +
                    </button>

                    <span className="sm:ml-5 text-gray-700 font-semibold text-sm sm:text-base">
                      Total: ${total.toFixed(2)}
                    </span>

                    <button
                      onClick={() => handleRemove(product.id)}
                      className="ml-auto px-3 sm:px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition text-sm sm:text-base"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* PAYMENT SECTION */}
      <div className="w-full max-w-6xl mt-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg border border-white/30">
        <PaymentForm total={finalTotal} />
      </div>
    </div>
  );
};

export default Checkout;
