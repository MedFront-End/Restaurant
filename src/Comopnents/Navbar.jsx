import React, { useState } from "react";
import { Link } from 'react-scroll';
import { PiForkKnifeFill } from "react-icons/pi";
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex items-center justify-between py-4 px-4 md:px-24 w-full h-16  fixed top-0 z-50 bg-white bg-gray-100 shadow-md">
      <div className="logo flex items-center gap-1">
        <PiForkKnifeFill className="text-3xl pb-1" />
        <span className="font-semibold text-2xl">FoodieWeb</span>
      </div>

      <div className="hidden md:flex items-center justify-end gap-8 w-full">
        <div className="nav-bar flex gap-8">
          <Link className="hover:text-orange-400 duration-75 cursor-pointer font-semibold text-base" to="home" spy={true} smooth={true} duration={500}>Home</Link>
          <div className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={toggleDropdown}>
             
              <Link className="hover:text-orange-400 duration-75 cursor-pointer font-semibold text-base" to="dishes" spy={true} smooth={true} duration={500}>Dishes</Link>
              <FaCaretDown className="text-orange-400" />
            </div>
            {showDropdown && (
              <div className="absolute top-8 left-0 w-32 bg-white text-black rounded shadow-lg">
                <Link className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" to="spicy" spy={true} smooth={true} duration={500}>Spicy</Link>
                <Link className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" to="tasty" spy={true} smooth={true} duration={500}>Tasty</Link>
                <Link className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" to="delicious" spy={true} smooth={true} duration={500}>Delicious</Link>
                <Link className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" to="crispy" spy={true} smooth={true} duration={500}>Crispy</Link>
              </div>
            )}
          </div>
          <Link className="hover:text-orange-400 duration-75 cursor-pointer font-semibold text-base" to="about" spy={true} smooth={true} duration={500}>About</Link>
          <Link className="hover:text-orange-400 duration-75 cursor-pointer font-semibold text-base" to="menu" spy={true} smooth={true} duration={500}>Menu</Link>
          <Link className="hover:text-orange-400 duration-75 cursor-pointer font-semibold text-base" to="reviews" spy={true} smooth={true} duration={500}>Reviews</Link>
        </div>

        <button onClick={() => setShowModal(true)} className="py-1 px-6 text-orange-400 border-orange-400 border-2 rounded-full hover:bg-orange-400 hover:text-white">Login</button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link className="hover:text-orange-400 duration-75 cursor-pointer" to="home" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
          <div className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={toggleDropdown}>
              <span className="hover:text-orange-400 duration-75">Dishes</span> 
              <FaCaretDown className="text-orange-400" />
            </div>
            {showDropdown && (
              <div className="absolute top-8 left-0 w-32 bg-gray-800 text-white rounded shadow-lg">
                <Link className="block px-4 py-2 hover:bg-gray-600 cursor-pointer" to="spicy" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Spicy</Link>
                <Link className="block px-4 py-2 hover:bg-gray-600 cursor-pointer" to="tasty" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Tasty</Link>
                <Link className="block px-4 py-2 hover:bg-gray-600 cursor-pointer" to="delicious" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Delicious</Link>
                <Link className="block px-4 py-2 hover:bg-gray-600 cursor-pointer" to="crispy" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Crispy</Link>
              </div>
            )}
          </div>
          <Link className="hover:text-orange-400 duration-75 cursor-pointer" to="about" spy={true} smooth={true} duration={500} onClick={toggleMenu}>About</Link>
          <Link className="hover:text-orange-400 duration-75 cursor-pointer" to="menu" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Menu</Link>
          <Link className="hover:text-orange-400 duration-75 cursor-pointer" to="reviews" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Reviews</Link>
          <button onClick={() => { setShowModal(true); toggleMenu(); }} className="py-1 px-6 text-orange-400 border-orange-400 border-2 rounded-full">Login</button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input type="password" id="password" className="w-full p-2 border rounded" />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="mr-16 py-2 px-4 bg-gray-500 text-white rounded">Cancel</button>
                <button type="submit" className="py-2 px-4 bg-orange-400 text-white rounded font-semibold text-lg">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

