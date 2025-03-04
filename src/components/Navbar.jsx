import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/image7.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-gray-100 shadow-md rounded-full flex items-center justify-between py-3 px-6 md:px-8 backdrop-blur-md z-50">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-2 md:space-x-3">
        <img src={logo} alt="Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full" />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">FinancAi</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
        <li><a href="#features" className="hover:text-blue-600 transition" onClick={() => handleScroll('features')}>Features</a></li>
        <li><a href="#testimonials" className="hover:text-blue-600 transition" onClick={() => handleScroll('testimonials')}>Testimonials</a></li>
        <li><a href="#pricing" className="hover:text-blue-600 transition" onClick={() => handleScroll('pricing')}>Pricing</a></li>
      </ul>

      {/* Contact Sales Button (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Contact Sales
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700 text-2xl focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-5/6 bg-white shadow-lg rounded-lg flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition" onClick={() => handleScroll('features')}>Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition" onClick={() => handleScroll('testimonials')}>Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition" onClick={() => handleScroll('pricing')}>Pricing</a>
          <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition" onClick={() => setMenuOpen(false)}>
            Contact Sales
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;