import React from "react";
import { classroom1 } from "../assets/images";
import {
  rectangle1,
  rectangle2,
  ellipsOrange,
  ellipsMini,
} from "../assets/icons";

const Classroom = () => {
  return (
    <section className="max-container padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-11 gap-x-8">
          {/* text-content */}
          <div className="flex flex-col justify-center md:max-w-[500px] mx-auto gap-y-5 bg-ellipsMini bg-no-repeat bg-right">
            <div className="bg-ellips bg-no-repeat">
              <h3 className="h2-medium text-center lg:text-start">
                Everything you can do in a physical classroom,{" "}
                <span className="text-secondary">you can do with Skilline</span>
              </h3>
            </div>
            <p className="subtitle text-center lg:text-start">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <p className="text-center lg:text-start">
              <a href="#" className="subtitle underline text-center">
                Learn more
              </a>
            </p>
          </div>
          {/* image-content */}
          <div className="relative w-[360px] md:w-[560px] h-[285px] md:h-[380px] mx-auto">
            <div className="absolute z-0 top-0 left-0">
              <img src={rectangle1} alt="" />
            </div>

            <div className="absolute w-full h-full p-4 z-10">
              <img src={classroom1} alt="" className="w-full h-full" />
            </div>
            <div className="absolute z-0 bottom-0 right-0">
              <img src={rectangle2} alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classroom;
