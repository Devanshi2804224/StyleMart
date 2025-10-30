import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Get cart data from Redux
  const cartItems = useSelector((state) => state.cart);

  // Calculate total quantity of all items
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <nav className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 shadow-xl px-10 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-white text-3xl font-bold tracking-wide">
        Style<span className="text-yellow-400">Mart</span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-10">
        <li>
          <Link
            to="/"
            className="text-white font-medium hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Productlist"
            className="text-white font-medium hover:text-yellow-300 transition duration-200"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="text-white font-medium hover:text-yellow-300 transition duration-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="text-white font-medium hover:text-yellow-300 transition duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Wishlist */}
        <Link
          to="/Wishlist"
          className="text-white hover:text-yellow-300 transition duration-200 flex items-center gap-1"
        >
          <Heart size={22} />
          <span>Wishlist</span>
        </Link>

        {/* Cart with badge */}
        <div className="relative">
          <Link
            to="/Cart"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition duration-200 flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>

          {/* Dynamic Cart Count Badge */}
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
