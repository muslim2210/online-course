import React from "react";
import { quis } from "../assets/images";

const Assesments = () => {
  return (
    <section className="max-container padding-y">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10  gap-x-8">
          <div className="max-w-[500px] mx-auto">
            {/* image */}
            <img src={quis} alt="" />
          </div>
          <div className="flex flex-col gap-y-5 mx-auto my-auto">
            {/* text */}
            <h2 className="h2 max-w-[300px] md:text-center md:max-w-[450px] lg:max-w-[300px] lg:text-start">
              Assessments, <span className="text-secondary">Quizzes</span>,
              Tests
            </h2>
            <p className="subtitle text-pretty max-w-[350px] md:text-center md:max-w-[450px] lg:max-w-[400px] lg:text-start">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assesments;
