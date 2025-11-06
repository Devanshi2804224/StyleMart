import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">StyleMart</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Your one-stop destination for stylish clothing, elegant jewellery,
            and cutting-edge electronics. We bring trends, luxury, and
            innovation — all to your doorstep.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-indigo-500 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition">
                About Us
              </a>
            </li>
           
            <li>
              <a href="/contact" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-indigo-400 transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="/shop/mens"
                className="hover:text-indigo-400 transition"
              >
                Men’s Clothing
              </a>
            </li>
            <li>
              <a
                href="/shop/womens"
                className="hover:text-indigo-400 transition"
              >
                Women’s Clothing
              </a>
            </li>
            <li>
              <a
                href="/shop/jewellery"
                className="hover:text-indigo-400 transition"
              >
                Jewellery
              </a>
            </li>
            <li>
              <a
                href="/shop/electronics"
                className="hover:text-indigo-400 transition"
              >
                Electronics
              </a>
            </li>
            <li>
              <a href="/offers" className="hover:text-indigo-400 transition">
                Special Offers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="flex justify-center sm:justify-start items-center">
              <i className="fas fa-map-marker-alt text-indigo-400 mr-2"></i>
              Ahmedabad, Gujarat, India
            </li>
            <li className="flex justify-center sm:justify-start items-center">
              <i className="fas fa-phone-alt text-indigo-400 mr-2"></i>
              +91 98765 43210
            </li>
            <li className="flex justify-center sm:justify-start items-center">
              <i className="fas fa-envelope text-indigo-400 mr-2"></i>
              support@stylemart.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto text-center mt-8 px-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-semibold">StyleMart</span>. All
          rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Designed with ❤️ for trendsetters and tech lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
