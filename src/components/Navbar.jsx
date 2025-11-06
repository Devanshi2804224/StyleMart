import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 shadow-xl px-6 md:px-10 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-white text-3xl font-bold tracking-wide">
        Style<span className="text-yellow-400">Mart</span>
      </Link>

      {/* Mobile menu toggle */}
      <div
        className="md:hidden text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Navigation Links + Mobile Cart/Wishlist */}
      <ul
        className={`flex flex-col md:flex-row items-center gap-5 md:gap-10 absolute md:static left-0 w-full md:w-auto bg-blue-950 md:bg-transparent transition-all duration-300 ease-in-out
        ${isOpen ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
        md:justify-center md:flex-1`}
      >
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

        {/* Mobile-only Cart/Wishlist */}
        <li className="md:hidden">
          <Link
            to="/Wishlist"
            className="text-white hover:text-yellow-300 transition duration-200 flex items-center gap-1 mt-2"
          >
            <Heart size={22} />
            Wishlist
          </Link>
        </li>
        <li className="md:hidden">
          <Link
            to="/Cart"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition duration-200 flex items-center gap-2 mt-2 relative"
          >
            <ShoppingCart size={20} />
            Cart
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Desktop Cart/Wishlist */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/Wishlist"
          className="text-white hover:text-yellow-300 transition duration-200 flex items-center gap-1"
        >
          <Heart size={22} />
          <span>Wishlist</span>
        </Link>

        <div className="relative">
          <Link
            to="/Cart"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition duration-200 flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>

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
