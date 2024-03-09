import React from "react";
import { discussion } from "../assets/images";

const Discussions = () => {
  return (
    <section className="max-container padding-y">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-8">
          <div className="max-w-[500px] mx-auto">
            {/* image */}
            <img src={discussion} alt="" />
          </div>
          <div className="flex flex-col gap-y-5 mx-auto my-auto">
            {/* text */}
            <h2 className="h2 max-w-[300px] md:text-center md:max-w-[450px] lg:max-w-[300px] lg:text-start">
              One-on-One <span className="text-secondary">Discussions</span>
            </h2>
            <p className="subtitle text-pretty max-w-[350px] md:text-center md:max-w-[450px] lg:max-w-[400px] lg:text-start">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discussions;
