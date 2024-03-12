import React from "react";
import { newsUtama, newsColom } from "../constant";
import CardNewsUtama from "../components/CardNewsUtama";
import CardNews from "../components/CardNews";

const Blog = () => {
  return (
    <section className="max-container padding lg:mt-11">
      <div className="container mx-auto">
        <h2 className="font-nunito text-[26px] text-primary font-bold md:text-[30px] lg:text-[32px] capitalize text-center">
          latest news and resources
        </h2>
        <p className="font-nunito text-subColor mt-6 text-[18px] md:text-[20px] text-center">
          See the developments that have occurred to Skillines in the world
        </p>
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-10 mt-7 lg:mt-20 mx-auto">
          <div className="w-full lg:max-w-[600px] lg:pr-8">
            {/* colom-full */}
            {newsUtama.map((news, index) => (
              <CardNewsUtama key={index} {...news} />
            ))}
          </div>
          <div className="flex flex-col gap-y-3 md:gap-y-8 2xl:gap-y-11 w-full">
            {/* colom-3 */}
            {newsColom.map((news1, e) => (
              <CardNews key={e} {...news1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
