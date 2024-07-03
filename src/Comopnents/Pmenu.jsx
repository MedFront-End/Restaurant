import React from "react";
import m7 from "../img/m7.jpg";
import m8 from "../img/m8.jpg";
import m9 from "../img/m9.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Pmenu() {
  return (
    <div className="px-4 pt-24 md:px-8 lg:px-32 lg:pt-32">
      <h1 className="pb-16 font-bold text-3xl md:text-4xl text-center">Premium Menu</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {[
          { img: m7, price: "$16.99" },
          { img: m8, price: "$18.99" },
          { img: m9, price: "$14.99" },
        ].map((dish, index) => (
          <div
            key={index}
            className="box text-center p-4 rounded-md border-2 border-orange-200 shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <img className="rounded-md w-full h-56 object-cover" src={dish.img} alt="dish" />
            <p className="pt-4 font-bold text-lg">Tasty Dish</p>
            <div className="stars flex pt-4 justify-center">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStarHalfAlt className="text-orange-500" />
            </div>
            <div className="price flex items-center justify-between w-full pt-8 px-4">
              <span className="text-md font-semibold">{dish.price}</span>
              <a
                href="#"
                className="py-1 px-4 text-orange-500 border-4 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition delay-150"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

