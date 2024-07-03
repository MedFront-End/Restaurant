import React from "react";
import u1 from "../img/u1.jpg";
import u2 from "../img/u2.jpg";
import u3 from "../img/u3.jpg";

export default function Reviews() {
  return (
    <div className="px-4 py-20 md:px-32 md:pt-30">
      <h1 className="pb-16 font-bold text-3xl md:text-4xl text-center">Customer's Review</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="box p-6 md:p-8 rounded-md shadow-[0_0_0_2px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full">
          <div className="flex-1">
            <p className="text-gray-500 leading-relaxed text-justify mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing jiom elit jusko lpos ksifak. Consequatur accusantium earum alias minus excepturi,
              placeat vel cumque! Illo quas nam repudiandae placeat. Lorem ipsum dolor sit amet consectetur adipisicing jyin koslos elit. 
              Consequatur accusantium joausdj fksdf earum alias minus excepturi, placeat vel cumque! Illo quas nam repudiandae placeat.
            </p>
          </div>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={u1} alt="Sophia Azura" />
            <span className="ml-4 font-semibold text-lg">Sophia Azura</span>
          </div>
        </div>

        <div className="box p-6 md:p-8 rounded-md shadow-[0_0_0_2px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full">
          <div className="flex-1">
            <p className="text-gray-500 leading-relaxed text-justify mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing jiom elit jusko lpos ksifak. Consequatur accusantium earum alias minus excepturi,
              placeat vel cumque! Illo quas nam repudiandae placeat. Lorem ipsum dolor sit amet consectetur adipisicing jyin koslos elit. 
              Consequatur accusantium joausdj fksdf earum alias minus excepturi, placeat vel cumque! Illo quas nam repudiandae placeat.
            </p>
          </div>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={u2} alt="John Deo" />
            <span className="ml-4 font-semibold text-lg">John Deo</span>
          </div>
        </div>

        <div className="box p-6 md:p-8 rounded-md shadow-[0_0_0_2px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full">
          <div className="flex-1">
            <p className="text-gray-500 leading-relaxed text-justify mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing jiom elit jusko lpos ksifak. Consequatur accusantium earum alias minus excepturi,
              placeat vel cumque! Illo quas nam repudiandae placeat. Lorem ipsum dolor sit amet consectetur adipisicing jyin koslos elit. 
              Consequatur accusantium joausdj fksdf earum alias minus excepturi, placeat vel cumque! Illo quas nam repudiandae placeat.
            </p>
          </div>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={u3} alt="Victoria Zoe" />
            <span className="ml-4 font-semibold text-lg">Victoria Zoe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

