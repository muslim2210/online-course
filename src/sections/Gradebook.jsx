import React from "react";
import { gradeBook } from "../assets/images";

const Gradebook = () => {
  return (
    <section className="max-container padding-y">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-8">
          <div className="max-w-[500px] mx-auto lg:order-2">
            {/* image */}
            <img src={gradeBook} alt="" />
          </div>
          <div className="flex flex-col gap-y-5 mx-auto lg:order-1 my-auto">
            {/* text */}
            <h2 className="h2 max-w-[350px] md:text-center md:max-w-[450px] lg:max-w-[400px] lg:text-start">
              <span className="text-secondary">Class Management</span> Tools for
              Educators
            </h2>
            <p className="subtitle text-pretty max-w-[300px] md:text-center md:max-w-[450px] lg:text-start">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gradebook;
