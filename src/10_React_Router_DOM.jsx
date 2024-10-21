import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header'; // Navbar Component
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      {/* Header/NavBar will be displayed on all routes */}
      <Header />
      
      {/* Define Routes for different pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
