import React from "react";
import { teacher1 } from "../assets/images";

const Teachers = () => {
  return (
    <section className="max-container padding-y">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 md:gap-y-20 gap-x-8">
          <div className="max-w-[500px] mx-auto lg:order-2">
            {/* image */}
            <img src={teacher1} alt="" />
          </div>
          <div className="flex flex-col gap-y-5 mx-auto lg:order-1 my-auto">
            {/* text */}
            <h2 className="h2 max-w-[350px] md:text-center md:max-w-[450px] lg:text-start">
              <span className="text-secondary">Tools</span> For Teachers And
              Learners
            </h2>
            <p className="subtitle text-pretty max-w-[350px] md:text-center md:max-w-[450px] lg:text-start">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
