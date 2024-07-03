import React from "react";
import hero from "../img/hero.jpg";

export default function Home() {
  return (
    <div className="relative ">
      <div
        className="bg-cover bg-center bg-no-repeat  "
        style={{
          backgroundImage: `url(${hero})`,
          height: "100vh" 
        }}
      >
        { 
          <div className="py-32   w-9/12 px-2 text-center m-auto  md:py-44 md:right-36 relative    ">
                 <h1 className=" text-3xl text-yellow-200 text-justify   font-semibold pb-2  md:text-6xl md:pl-3   md:font-semibold md:pb-3 flex flex-start  ">Elevate Your Inner</h1>
                 <h1 className=" text-3xl text-yellow-200 text-justify   font-semibold pb-6  md:text-6xl md:pl-3   md:font-semibold md:pb-6 flex flex-start  ">Foodie with Every Bite.</h1>
                 <p className="text-yellow-200  text-sm pb-4  w-full text-justify    md:flex flex-start  md:pl-1 md:pb-1  md:w-4/6  md:pl-4">Lorem ipsum dolor sit  sdasda amet dsfsaa consectetur adipisicing elit.Porro omni </p>
                 <p className="text-yellow-200  text-sm pb-12 w-full  text-justify  md:flex flex-start    md:pl-1  md:pb-12 md:w-4/6 md:pl-4">corrupti illo  sasolore msfa sdega sdfsafas molestias sfsa
                     enim dolorum officiis illum ipsa.</p>
                
                 <a className="md:absolute left-60   py-2 px-6 text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition delay-150" href="###">Order Now</a>
          </div>
        }
      </div>
  
    </div>
  );
}
