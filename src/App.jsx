import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from "./components/About";
import Home1 from './components/Home1';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Productlist from './components/Productlist';
import { Provider } from 'react-redux';
import Store from './slice/Store';
import Cart from './components/Cart';
import Productdetails from './components/Productdetails';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';



const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route path="/" element={<Home1 />} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/About" element={<About />} />
       <Route path="/Productlist" element={<Productlist/>} />
       <Route path="/Cart" element={<Cart/>} />
       <Route path="/products/:id" element={<Productdetails />} />
       <Route path="/Wishlist" element={<Wishlist/>} />
       <Route path="/Checkout" element={<Checkout/>} />
       
       </Routes>
       <Footer/>
        </BrowserRouter>
        </Provider>

    </div>
  )
}

export default App