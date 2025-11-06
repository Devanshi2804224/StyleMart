import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, clear } from "../slice/Wishlistslice1";
import { add as addToCart } from "../slice/CartSlice";
import { motion } from "framer-motion";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear your wishlist?")) {
      dispatch(clear());
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen py-20 px-4 sm:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left text-indigo-700">
          Your Wishlist 💜
        </h2>
        {wishlistItems.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClearAll}
            className="mt-4 sm:mt-0 px-5 py-2 text-sm font-bold rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
          >
            Clear All
          </motion.button>
        )}
      </div>

      {/* EMPTY STATE */}
      {wishlistItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center h-96 text-gray-500"
        >
          <p className="text-lg mb-4">Your wishlist is feeling lonely 😔</p>
          <p className="text-sm text-gray-400">
            Start adding products you love!
          </p>
        </motion.div>
      ) : (
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {/* IMAGE */}
              <div className="bg-gradient-to-b from-purple-50 to-white flex justify-center items-center h-60 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain p-5 hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* DETAILS */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {product.description}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-blue-200 to-purple-200 text-purple-700 text-xs px-4 py-1 rounded-full font-semibold shadow-sm mb-3">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-extrabold text-purple-700">
                    ${product.price}
                  </span>

                  <div className="flex gap-2">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition"
                    >
                      Add to Cart
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleRemove(product.id)}
                      className="px-3 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white font-semibold transition"
                    >
                      ✕
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Wishlist;
