import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Discover who we are, what we believe in, and how we bring quality, style, and technology to your life.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Welcome to <span className="text-indigo-600 font-bold">StyleMart</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          At <strong>StyleMart</strong>, we blend fashion and innovation to create a seamless shopping experience.
          Whether it’s the elegance of <em>Jewellery</em>, the comfort of <em>Men’s and Women’s Clothing</em>,
          or the innovation of <em>Electronics</em>, we deliver products that match your lifestyle and values.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Story</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded with the belief that everyone deserves access to quality products without compromise,
              StyleMart started as a small online store for trendy clothing. Over time, we expanded our
              collection to include exquisite jewellery and cutting-edge electronics.
            </p>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Today, we are proud to serve thousands of customers across the country — helping them look their
              best, feel confident, and stay connected to the world.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Our Categories */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10 text-indigo-600">What We Offer</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Men’s Clothing */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://themewagon.github.io/hexashop/assets/images/men-02.jpg"
                alt="Men’s Clothing"
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">Men’s Clothing</h4>
              <p className="text-gray-600">
                From casual wear to premium styles, our men’s collection defines modern fashion with comfort.
              </p>
            </div>

            {/* Women’s Clothing */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://themewagon.github.io/hexashop/assets/images/women-01.jpg"
                alt="Women’s Clothing"
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">Women’s Clothing</h4>
              <p className="text-gray-600">
                A blend of elegance, style, and comfort — designed for women who inspire every day.
              </p>
            </div>

            {/* Jewellery */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://alukas.presslayouts.com/wp-content/themes/alukas-child/assets/images/newsletter-banner.jpg"
                alt="Jewellery"
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">Jewellery</h4>
              <p className="text-gray-600">
                Timeless pieces that add a touch of sparkle and grace to your personality.
              </p>
            </div>

            {/* Electronics */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://wpthemes.themehunk.com/electronics-megamarket/wp-content/uploads/sites/346/2020/08/product26.png"
                alt="Electronics"
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">Electronics</h4>
              <p className="text-gray-600">
                Explore top-notch gadgets designed to simplify your world and elevate your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-8 text-center text-indigo-600">Our Mission & Vision</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-3">Our Mission</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver quality products that blend style, comfort, and technology — empowering customers to
              express themselves confidently every day.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-3">Our Vision</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the most trusted online store where fashion meets innovation, and every product tells a
              story of craftsmanship, value, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-indigo-600 text-white text-center py-12 px-6">
        <h3 className="text-3xl font-bold mb-3">Thank You for Being Part of Our Journey</h3>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          At StyleMart, we don’t just sell products — we create experiences. Your trust inspires us to keep
          improving, innovating, and redefining online shopping.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
