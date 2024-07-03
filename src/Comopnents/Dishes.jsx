import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import m1 from "../img/m1.jpg";
import m2 from "../img/m2.jpg";
import m3 from "../img/m3.jpg";
import m4 from "../img/m4.jpg";
import m5 from "../img/m5.jpg";
import m6 from "../img/m6.jpg";

export default function Dishes() {
  return (
    <div className="px-4 md:px-8 lg:px-32 py-24">
      <h1 className="pb-16 font-bold text-4xl text-center">Our Dishes</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {[
          { img: m1, price: "$10.99" },
          { img: m2, price: "$12.99" },
          { img: m3, price: "$10.99" },
          { img: m4, price: "$11.99" },
          { img: m5, price: "$12.99" },
          { img: m6, price: "$10.99" },
        ].map((dish, index) => (
          <div
            key={index}
            className="box text-center p-4 rounded-md border-2 border-orange-200 shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <img className="rounded-md w-full " src={dish.img} alt="dish" />
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
