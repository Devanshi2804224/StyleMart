import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16 sm:py-20 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
          We’d love to hear from you! Whether you have a question about our
          products, orders, or just want to share feedback — we’re here to help.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {/* Address */}
        <div className="bg-white rounded-2xl shadow p-6 sm:p-8 text-center hover:shadow-lg transition">
          <i className="fas fa-map-marker-alt text-3xl text-indigo-600 mb-4"></i>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Our Address</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            102, Fashion Street, Navrangpura, <br />
            Ahmedabad, Gujarat, India – 380009
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-2xl shadow p-6 sm:p-8 text-center hover:shadow-lg transition">
          <i className="fas fa-phone-alt text-3xl text-indigo-600 mb-4"></i>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600 mb-1 text-sm sm:text-base">
            +91 98765 43210
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Mon - Sat: 9:00 AM - 7:00 PM
          </p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl shadow p-6 sm:p-8 text-center hover:shadow-lg transition">
          <i className="fas fa-envelope text-3xl text-indigo-600 mb-4"></i>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 mb-1 text-sm sm:text-base">
            support@stylemart.com
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            We’ll reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Fill out the form below, and one of our friendly team members will
            get back to you shortly.
          </p>
        </div>

        <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2 text-sm sm:text-base"
          />
          <textarea
            placeholder="Your Message..."
            rows="6"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2 text-sm sm:text-base"
            required
          ></textarea>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-indigo-700 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-3 sm:mb-4">
            Find Us on Map
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Visit our store or pick up your orders directly — we’re happy to
            meet you!
          </p>
        </div>
        <div className="max-w-5xl mx-auto h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="StyleMart Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.771161152573!2d72.54092097481089!3d23.03487791662939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f31b9f26a7%3A0xd8b4c0bb1d9e3f12!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1695400000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-indigo-600 text-white text-center py-10 sm:py-12 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Connect With Us</h2>
        <div className="flex justify-center space-x-5 sm:space-x-6 text-lg sm:text-2xl">
          <a href="#" className="hover:text-gray-200 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
