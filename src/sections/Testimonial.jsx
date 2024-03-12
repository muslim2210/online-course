import React from "react";
import ButtonFeatures from "../components/ButtonFeatures";
import { arrow, stars, chefRight } from "../assets/icons";
import { testimoni } from "../assets/images";

const Testimonial = () => {
  return (
    <section className="max-container padding md:mb-10 lg:mb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 md:gap-14">
          <div className="flex flex-col gap-y-6 max-w-[450px] lg:w-full mx-auto">
            {/* text-content */}
            <div className="flex items-center md:justify-center lg:justify-start gap-x-3">
              <hr className="w-[50px] text-primary border-primary border-1" />
              <h5 className="h5 uppercase">testimonial</h5>
            </div>
            <h1 className="capitalize text-[38px] md:text-[42px] lg:text-[46px] text-primary font-semibold">
              what the say?
            </h1>
            <div className="flex flex-col gap-y-4 subtitle">
              <p>
                Skilline has got more than 100k positive ratings from our users
                around the world.{" "}
              </p>
              <p>
                Some of the students and teachers were greatly helped by the
                Skilline.
              </p>
              <p>Are you too? Please give your assessment</p>
            </div>
            <div className="flex md:justify-center lg:justify-start mt-3">
              <button className="flex gap-x-3 items-center font-nunito text-secondary border-2 border-secondary rounded-full pl-5  ">
                <p>Write your assessment</p>
                <div className="rounded-full border-2 border-secondary px-4 py-5">
                  <img src={arrow} alt="" className="" />
                </div>
              </button>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[480px] lg:h-[450px] max-w-[400px] md:max-w-[520px] mx-auto">
            {/* image-content */}
            <div className="w-full pr-20 md:pr-24">
              <img src={testimoni} alt="" />
            </div>
            <div className="absolute z-10 rounded-[20px] max-w-[500px] shadow-xl top-[50%] md:top-[90%] bg-[#F67766] right-0 left-12 md:left-[80px] pl-3">
              <div className="w-full h-full bg-white py-3 px-7 md:py-6 md:px-8 rounded-[20px]">
                <p className="text-xs md:text-lg font-nunito text-subColor">
                  "Thank you so much for your help. It's exactly what I've been
                  looking for. You won't regret it. It really saves me time and
                  effort. Skilline is exactly what our business has been
                  lacking."
                </p>
                <div className="flex justify-between mt-3 items-center">
                  <p className="font-nunito text-sm  md:text-base text-subColor">
                    Gloria Rose
                  </p>
                  <div className="py-1">
                    <img src={stars} alt="" width={90} />
                    <p className="mt-2 text-xs font-nunito text-subColor">
                      12 Reviews at Yelp
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute z-10 top-[20%] md:top-[40%] right-[50px] md:right-[60px]">
              <div className="shadow-xl flex rounded-full border-1 border-slate-gray bg-white w-[60px] p-2 h-[60px] items-center justify-center">
                <img src={chefRight} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
