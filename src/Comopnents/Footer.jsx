import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-32">
        <div className="space-y-4 text-justify  ">
          <h1 className="font-bold text-lg">FoodieWeb</h1>
          <p className="w-full">Loremipsumd olorsitametconsecteturadipisi cingelit.Quasinequeliasmol estiae.</p>
        </div>


        <div className="space-y-4 text-justify">
          <h1 className="font-bold text-lg">Links</h1>
          <a href="#" className="block hover:text-orange-400">Dishes</a>
          <a href="#" className="block hover:text-orange-400">About</a>
          <a href="#" className="block hover:text-orange-400">Menu</a>
          <a href="#" className="block hover:text-orange-400">Reviews</a>
        </div>


        <div className="space-y-4 text-justify">
          <h1 className="font-bold text-lg">Menu</h1>
          <a href="#" className="block hover:text-orange-400">Our Dishes</a>
          <a href="#" className="block hover:text-orange-400">Premium Menu</a>
        </div>


        <div className="space-y-4 text-justify">
          <h1 className="font-bold text-lg">Contact Us</h1>
          <span className="block">FoodieWeb@gmail.com</span>
          <span className="block">+64 958 248 966</span>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400"><FaFacebook /></a>
            <a href="#" className="hover:text-orange-400"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="text-center pt-16">
        <span className="text-gray-500">&copy; 2024 | All rights reserved</span>
      </div>
    </div>
  );
}
