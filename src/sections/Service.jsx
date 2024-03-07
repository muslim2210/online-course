import React from "react";
import { services } from "../constant";
import CardServices from "../components/CardServices";

const Service = () => {
  return (
    <div className="max-container padding">
      <div className="container mx-auto">
        {/* text title */}
        <div className="py-5 md:py-7 flex flex-col gap-y-5 justify-center">
          <h1 className="h3 text-center">
            All-In-One <span className="text-secondary">Cloud Software.</span>
          </h1>
          <p className="text-subColor subtitle text-center max-w-[300px] lg:max-w-[450px] mx-auto">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
        {/* service section */}
        <div className="grid md:grid-cols-3 mt-10 md:mt-20 justify-center gap-y-14 gap-x-5 max-w-[1100px] mx-auto">
          {services.map((service, index) => (
            <CardServices key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
