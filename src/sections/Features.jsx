import React from "react";
import { teachers } from "../assets/images";
import { ellipsBlue, ellipsGreen, ellipsSm1, ellipsSm2 } from "../assets/icons";
import { features } from "../constant";
import CardFeatures from "../components/CardFeatures";

const Features = () => {
  return (
    <section className="max-container padding">
      <div className="container mx-auto">
        <h2 className="h3 text-center">
          Our <span className="text-secondary">Features</span>
        </h2>
        <p className="subtitle text-center mt-5">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="flex flex-col lg:flex-row gap-y-3 gap-x-8 mt-14 lg:mt-20">
          {/* image-content */}
          <div className="relative w-[340px] md:w-[560px] h-[300px] md:h-[430px] lg:h-[550px] mx-auto lg:w-3/5 lg:px-10">
            <div className="absolute z-0 top-0 left-[2rem] lg:left-[5rem]">
              <img src={ellipsGreen} alt="" width={70} height={70} />
            </div>
            <div className="absolute z-0 top-0 left-[7rem] lg:left-[10rem]">
              <img src={ellipsSm1} alt="" width={15} height={15} />
            </div>

            <div className="absolute w-full h-full lg:max-w-[700px] py-8 z-10">
              <img
                src={teachers}
                alt=""
                className="w-full h-full cursor-pointer"
              />
            </div>
            <div className="absolute z-0 bottom-[2rem] right-[3rem] lg:right-[6rem] 2xl:right-[9rem]">
              <img src={ellipsBlue} alt="" width={100} height={100} />
            </div>
            <div className="absolute z-0 bottom-[2rem] right-[10rem] lg:right-[13rem] 2xl:right-[16rem]">
              <img src={ellipsSm2} alt="" width={15} height={15} />
            </div>
          </div>
          <div className="flex flex-col gap-y-6 lg:w-2/5 md:mx-auto lg:mx-0 mt-2 lg:mt-14">
            {/* text-content */}
            <h2 className="h2 max-w-[500px]">
              A <span className="text-secondary ">user interface</span> designed
              for the classroom
            </h2>
            {features.map((feature, index) => (
              <CardFeatures key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
