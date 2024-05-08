import React from 'react'
import Hero from './Pages/hero/Hero'
import Shop from './Pages/shop/Shop' 
import About from './Pages/about/About' 
import Navbar from './Component/Navbar'
import Wealth from './Pages/wealth/Wealth' 
import Health from './Pages/health/Health' 
import Contact from './Pages/contact/Contact'
import SignUp from './Component/SignUp/Index' 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
      <Router>
          <div className="">
              <Navbar />
              <Hero />
              <About />
              <Contact />

              <Routes>
                  {/* <Route path="/" element={<Hero />} /> */}
                  {/* <Route path="/about" element={<About />} /> */}
                  <Route path="/wealth" element={<Wealth />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/health" element={<Health />} />
                  {/* <Route path="/contact" element={<Contact />} /> */}
                  <Route path="/register" element={<SignUp />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;

