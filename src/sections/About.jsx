import React from "react";
import { about } from "../constant";
import CardImage from "../components/CardImage";

const About = () => {
  return (
    <section className="max-container padding">
      <div className="container mx-auto">
        {/* text-title */}
        <div className="flex flex-col justify-center gap-y-5 max-w-[280px] md:max-w-[500px] lg:max-w-[700px] mx-auto">
          <h2 className="h2 text-center">
            What is <span className="text-secondary">Skilline?</span>
          </h2>
          <p className="subtitle text-center">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-10 md:mt-20 justify-center gap-y-10 md:gap-y-2 gap-x-4 lg:gap-x-12 max-w-[900px] mx-auto">
          {about.map((item, index) => (
            <CardImage key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
