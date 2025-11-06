import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../slice/CartSlice";
import { add as addToWishlist } from "../slice/Wishlistslice1"; // ✅ updated import
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductList = () => {
  const [alldata, setAlldata] = useState([]);
  const [sold, setSold] = useState([]);
  const [search, setSearch] = useState("");
  const [pricerate, setPricerate] = useState("");

  const cartItems = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist); // ✅ added to check duplicates
  const dispatch = useDispatch();

  // 🛒 ADD TO CART
  const ADD = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      dispatch(add(product));
      alert("Product added successfully!");
    } else {
      alert("Product already in cart!");
    }
  };

  // ❤️ ADD TO WISHLIST
  const WH = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);
    if (!exists) {
      dispatch(addToWishlist(product));
      alert("Product added to wishlist!");
    } else {
      alert("Product already wishlisted!");
    }
  };

  const BUTTON = (category) => {
    const filtered = alldata.filter((item) => item.category === category);
    setSold(filtered);
  };

  const Search = (e) => {
    setSearch(e.target.value);
    const filtered = alldata.filter(
      (item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSold(filtered);
  };

  const PRICE = (e) => {
    setPricerate(e.target.value);
    const filtered = alldata.filter((item) => {
      if (e.target.value === "") return true;
      if (e.target.value === "0-400") return item.price >= 0 && item.price <= 400;
      if (e.target.value === "400-800") return item.price >= 400 && item.price <= 800;
      if (e.target.value === "800-1000") return item.price >= 800 && item.price <= 1000;
      return false;
    });
    setSold(filtered);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setSold(data);
        setAlldata(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 mb-10"
      >
        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap pt-20 justify-center gap-4">
          {[
            { label: "All", color: "from-blue-500 to-purple-500", func: () => setSold(alldata) },
            { label: "Men", color: "from-pink-500 to-red-400", func: () => BUTTON("men's clothing") },
            { label: "Women", color: "from-purple-500 to-pink-400", func: () => BUTTON("women's clothing") },
            { label: "Jewellery", color: "from-yellow-400 to-orange-400", func: () => BUTTON("jewelery") },
            { label: "Electronics", color: "from-green-400 to-teal-400", func: () => BUTTON("electronics") },
          ].map((btn, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={btn.func}
              className={`px-7 py-2 rounded-full bg-gradient-to-r ${btn.color} text-white font-bold shadow-md hover:shadow-xl transition-all duration-300 ring-2 ring-offset-2 ring-white`}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* SEARCH & FILTER */}
        <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
          <input
            type="search"
            placeholder="🔍 Search products..."
            onChange={Search}
            value={search}
            className="w-80 px-5 py-2 rounded-full border-2 border-purple-200 focus:border-purple-400 outline-none shadow-md transition-all duration-200 bg-white text-gray-700 placeholder-gray-400"
          />
          <select
            id="price"
            value={pricerate}
            onChange={PRICE}
            className="px-4 py-2 rounded-full border-2 border-purple-200 bg-white focus:border-purple-400 outline-none shadow-md text-gray-700"
          >
            <option value="">Select Price Range</option>
            <option value="0-400">0 - 400</option>
            <option value="400-800">400 - 800</option>
            <option value="800-1000">800 - 1000</option>
          </select>
        </div>
      </motion.div>

      {/* PRODUCT GRID */}
      <div className="flex flex-wrap gap-10 justify-center mt-10 px-6">
        {sold.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col relative group border border-purple-100 hover:shadow-2xl transition duration-300"
          >
            {/* HEART BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => WH(product)}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500 transition"
            >
              ❤️
            </motion.button>

            {/* IMAGE */}
            <Link to={`/products/${product.id}`} className="flex justify-center items-center bg-gradient-to-b from-purple-50 to-white">
              <motion.img
                src={product.image}
                alt={product.title}
                className="h-64 object-contain p-6 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* DETAILS */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-extrabold text-lg mb-2 text-gray-800 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
              <span className="inline-block bg-gradient-to-r from-blue-200 to-purple-200 text-purple-700 text-xs px-4 py-1 rounded-full mb-2 w-fit font-semibold shadow-sm">
                {product.category}
              </span>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-extrabold text-purple-700">
                  ${product.price}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => ADD(product)}
                  className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition font-bold ring-2 ring-purple-200 focus:ring-4 focus:outline-none"
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;









// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { add } from "../slice/CartSlice"
// import { Link } from 'react-router-dom'

// const Data = () => {
//   const [sold, setSold] = useState([])
//   const [allData, setAllData] = useState([])
//   const [searchh, setSearchh] = useState("")
//   const [pricerate, setPricerate] = useState("")

//   const names = useSelector((state) => state.cart)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => {
//         setSold(data)
//         setAllData(data)
//       })
//   }, [])

//   const ADD = (demo) => {
//     let numm = names.find((totalitem) => totalitem.id === demo.id)
//     if (!numm) {
//       dispatch(add(demo))
//     } else {
//       alert("Product successfully added to cart! 🤩")
//     }
//   }

//   const BUTTONN = (aaa) => {
//     let bbb = allData.filter((item) => item.category === aaa)
//     setSold(bbb)
//   }

//   const SEARCHING = (e) => {
//     setSearchh(e.target.value)
//     let names = allData.filter((demoss) =>
//       demoss.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       demoss.category.toLowerCase().includes(e.target.value.toLowerCase()))
//     setSold(names)
//   }

//   const PCHANGE = (e) => {
//     setPricerate(e.target.value)
//     let demooo = allData.filter((itemm) => {
//       if (e.target.value === "") {
//         return true
//       } else if (e.target.value === "0-400") {
//         return itemm.price >= 0 && itemm.price <= 400
//       } else if (e.target.value === "400-800") {
//         return itemm.price >= 400 && itemm.price <= 800
//       } else if (e.target.value === "800-1000") {
//         return itemm.price >= 800 && itemm.price <= 1000
//       }
//       return false
//     })
//     setSold(demooo)
//   }

//   return (
//     <>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         gap: 25,
//         alignItems: 'center',
//         background: 'linear-gradient(90deg, #f8fafc 0%, #e0e7ff 100%)',
//         padding: '20px 0',
//         borderRadius: '12px',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
//       }}>
//         <button className="btn btn-outline-primary" onClick={() => setSold(allData)}>All</button>
//         <button className="btn btn-outline-secondary" onClick={() => BUTTONN("men's clothing")}>Men's clothing</button>
//         <button className="btn btn-outline-warning" onClick={() => BUTTONN("jewelery")}>Jewelery</button>
//         <button className="btn btn-outline-info" onClick={() => BUTTONN("electronics")}>Electronics</button>
//         <button className="btn btn-outline-danger" onClick={() => BUTTONN("women's clothing")}>Women's clothing</button>

//         <input
//           type='text'
//           placeholder='Search products...'
//           value={searchh}
//           onChange={SEARCHING}
//           style={{
//             padding: '8px 12px',
//             borderRadius: '6px',
//             border: '1px solid #d1d5db',
//             outline: 'none',
//             width: '180px'
//           }}
//         />
//         <select
//           value={pricerate}
//           onChange={PCHANGE}
//           style={{
//             padding: '8px 12px',
//             borderRadius: '6px',
//             border: '1px solid #d1d5db',
//             outline: 'none'
//           }}
//         >
//           <option value="">Price Range</option>
//           <option value="0-400">0-400</option>
//           <option value="400-800">400-800</option>
//           <option value="800-1000">800-1000</option>
//         </select>
//       </div>

//       <div className='container mt-4'>
//         <div className='row text-center'>
//           {sold.length === 0 && (
//             <div className="col-12 mt-5">
//               <h4 style={{ color: '#6366f1' }}>No products found!</h4>
//             </div>
//           )}
//           {sold.map((demo) => (
//             <div key={demo.id} className='col-sm-12 col-md-6 col-lg-4 col-12 col-xxl-3'>
//               <div className="card mt-4 shadow-lg border-0" style={{
//                 transition: 'transform 0.2s',
//                 background: 'linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)'
//               }}>
//                 <div className="card-body d-flex flex-column align-items-center">
//                   <img
//                     src={demo.image}
//                     className="card-img-top mx-auto"
//                     alt={demo.title}
//                     style={{
//                       height: 150,
//                       width: 150,
//                       objectFit: 'contain',
//                       marginBottom: '12px',
//                       borderRadius: '8px',
//                       boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
//                     }}
//                   />
//                   <h6 className="card-title mt-2" style={{
//                     fontWeight: 600,
//                     color: '#374151'
//                   }}>{demo.title.slice(0, 30)}{demo.title.length > 30 ? '...' : ''}</h6>
//                   <span className="badge bg-primary mb-2" style={{ fontSize: '1rem' }}>
//                     ${demo.price}
//                   </span>
//                   <div className="d-flex gap-2 mt-2">
//                     <button
//                       className="btn btn-success"
//                       onClick={() => ADD(demo)}
//                       style={{ fontWeight: 500 }}
//                     >
//                       Add to Cart
//                     </button>
//                     <Link to="checkout">
//                       <button className="btn btn-warning" style={{ fontWeight: 500 }}>
//                         Buy Now
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Data