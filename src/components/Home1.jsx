import React from "react";

const Home1 = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 sm:py-24 px-4 sm:px-6 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
            Style. Shine. Simplified.
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 px-2">
            Redefine your look with premium fashion, elegant jewellery, and cutting-edge electronics.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105"
          >
            Explore Collections
          </a>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff')] bg-cover bg-center"></div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-indigo-600">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Men’s Clothing",
              img: "https://themewagon.github.io/hexashop/assets/images/men-03.jpg",
              desc: "From casual tees to formal fits — redefine your wardrobe.",
            },
            {
              title: "Women’s Clothing",
              img: "https://themewagon.github.io/hexashop/assets/images/women-02.jpg",
              desc: "Discover elegance with outfits crafted for confidence and style.",
            },
            {
              title: "Jewellery",
              img: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-handmade-category-2.jpg",
              desc: "Sparkle with timeless designs for every celebration.",
            },
            {
              title: "Electronics",
              img: "https://wpthemes.themehunk.com/electronics-megamarket/wp-content/uploads/sites/346/2020/08/product16.png",
              desc: "Gadgets that make your world smarter and simpler.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-64 sm:h-72 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-8 sm:mb-10">
            ✨ New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {[
              {
                img: "https://demo1.leotheme.com/leo_lana_demo/themes/leo_lana/assets/img/modules/appagebuilder/icon/ln2.jpg",
                name: "Floral Maxi Dress",
                price: "₹2,499",
                desc: "Flowy maxi dress with vibrant floral prints. Perfect for summer outings, brunches, or evening parties. Lightweight, breathable, and elegant.",
              },
              {
                img: "https://mockey.ai/wp-content/uploads/sites/3/2023/09/mockey-mockup-generator-for-white-hoodie-template.png",
                name: "Men’s White Hoodie",
                price: "₹1,899",
                desc: "Classic white hoodie with soft cotton fabric. Ideal for casual wear or layering.",
              },
              {
                img: "https://wdtswarna.wpengine.com/wp-content/uploads/2024/10/Home-1-Slider-img-01.jpg",
                name: "Diamond Necklace",
                price: "₹5,999",
                desc: "Elegant diamond necklace crafted with precision. Sparkles beautifully under any light.",
              },
              {
                img: "https://wpthemes.themehunk.com/electronics-megamarket/wp-content/uploads/sites/346/2020/08/product1.png",
                name: "Wireless Headphones",
                price: "₹3,299",
                desc: "High-quality wireless headphones with deep bass and noise-cancellation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl shadow hover:shadow-2xl transition p-5 bg-gray-50 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 sm:h-64 w-full object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">{item.desc}</p>
                <p className="text-indigo-600 font-bold mb-4">{item.price}</p>
                <button className="bg-indigo-600 text-white px-4 sm:px-5 py-2 rounded-full hover:bg-indigo-700 transition mt-auto">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative bg-gradient-to-r from-pink-600 to-red-600 text-white text-center py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">🔥 Mega Autumn Sale</h2>
        <p className="text-base sm:text-lg mb-6">
          Get up to 70% off on top brands — only this week!
        </p>
        <a
          href="/shop"
          className="inline-block bg-white text-pink-700 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Grab the Deals
        </a>
      </section>

      {/* Top Deals */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-8 sm:mb-10">
            Top Deals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                img: "https://preview.wolfthemes.store/app/uploads/sites/15/2018/07/sidm0-768x980.jpg",
                name: "Leather Jacket",
                desc: "Premium quality leather jacket with a stylish modern cut.",
              },
              {
                img: "https://m.media-amazon.com/images/I/71vfDASd8XL._AC_UL480_FMwebp_QL65_.jpg",
                name: "Saree Collection",
                desc: "Elegant sarees crafted with fine fabrics and intricate designs.",
              },
              {
                img: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/gallery-5.jpg",
                name: "Gold Earrings",
                desc: "Beautifully designed gold earrings that add sparkle to any outfit.",
              },
            ].map((deal, i) => (
              <div
                key={i}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-2xl transition text-left flex flex-col"
              >
                <img
                  src={deal.img}
                  alt={deal.name}
                  className="h-48 sm:h-56 w-full object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{deal.name}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{deal.desc}</p>
                <button className="mt-auto bg-indigo-600 text-white px-4 sm:px-5 py-2 rounded-full hover:bg-indigo-700 transition">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Voices */}
      <section className="bg-[#fdf8f4] py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden rounded-l-[100px] md:rounded-l-[150px]">
            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              alt="Customer wearing elegant outfit"
              className="w-full h-72 sm:h-[550px] object-cover"
            />
          </div>

          <div className="text-gray-700">
            <h5 className="uppercase tracking-widest text-sm text-gray-500 mb-3">
              Customer Voices
            </h5>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Our Customers Speak For Us
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8">
              “The fabric quality is absolutely amazing — soft, breathable, and feels luxurious...”
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                alt="Customer profile"
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover border border-gray-300"
              />
              <div>
                <p className="text-base sm:text-lg font-medium text-gray-900">
                  Sofia Williams
                </p>
                <p className="text-sm text-gray-500">London, UK</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8 sm:mt-10">
              <span className="text-sm text-gray-400">01</span>
              <div className="flex-1 h-[2px] bg-gray-200 relative">
                <div className="absolute left-0 top-0 h-[2px] w-1/5 bg-indigo-700"></div>
              </div>
              <span className="text-sm text-gray-400">04</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-600 text-white text-center py-14 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Family</h2>
        <p className="text-base sm:text-lg mb-6 opacity-90">
          Get updates, discounts, and insider fashion news delivered to your inbox.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home1;
