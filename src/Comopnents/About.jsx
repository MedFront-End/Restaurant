import React from "react";
import ima from "../img/about.png";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 md:flex md:items-center md:justify-between md:h-screen">
      <div className="md:w-1/2">
        <img src={ima} alt="Delicious food" className="w-10/12 h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Why Choose Us?</h1>
        <p className="text-md leading-relaxed mb-6 text-center md:text-left">
          <span className="block mb-4">Welcome to Foodie, where culinary excellence meets warm hospitality. Our passionate chefs craft every dish with the finest, freshest ingredients, ensuring an unforgettable dining experience. We pride ourselves on a diverse menu that caters to all tastes, from traditional favorites to innovative new creations.</span>
          <span className="block">Our cozy, inviting atmosphere provides the perfect backdrop for any occasion, whether a casual meal or a special celebration. With a commitment to exceptional service, we treat every guest like family. Come and discover why Foodie is the preferred choice for food lovers in the community. Taste, quality, and a memorable dining experience await you!</span>
        </p>
        <div className="text-center md:text-left">
          <a
            className="inline-block py-2 px-6 text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition delay-150"
            href="###"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
