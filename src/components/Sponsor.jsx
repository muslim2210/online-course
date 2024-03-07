import React from "react";
import { sponsor } from "../constant";

const Sponsor = () => {
  return (
    <div className="container mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1000px] mt-2 lg:mt-28 mb-10">
      <div className=" flex flex-col flex-wrap justify-center gap-x-3 items-center">
        <h2 className="text-[18px] lg:text-[20px] text-subColor">
          Trusted by 5,000+ Companies Worldwide
        </h2>
        <div className="flex flex-wrap justify-center mt-2 gap-x-5 lg:gap-x-10">
          {sponsor.map((item, index) => (
            <div key={index} className="py-1 mt-10">
              <img src={item} alt="" className="h-6 md:h-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
