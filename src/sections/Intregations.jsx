import React from "react";
import ButtonFeatures from "../components/ButtonFeatures";
import { onedrive, dropbox, googleDrive, tii } from "../assets/icons";

const Intregations = () => {
  return (
    <section className="max-container padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 md:gap-y-14 gap-x-12">
          <div className="flex flex-col gap-y-5 max-w-[450px] lg:w-full mx-auto lg:order-2">
            {/* text */}
            <div className="flex items-center md:justify-center lg:justify-start gap-x-3">
              <hr className="w-[50px] text-primary border-primary border-1" />
              <h5 className="h5 uppercase">Integrations</h5>
            </div>
            <h3 className="h3-medium font-nunito max-w-[300px] md:max-w-[450px] md:text-center lg:text-start">
              200+ educational tools and platform{" "}
              <span className="text-secondary">integrations</span>
            </h3>
            <p className="subtitle max-w-[350px] text-pretty md:max-w-[450px] md:text-center lg:text-start">
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <div className="max-w-[300px] md:mx-auto mt-2 lg:mx-0">
              <ButtonFeatures variant="lg:text-lg md:px-8 md:py-3">
                See All Integrations
              </ButtonFeatures>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-5 w-full lg:max-w-[600px] lg:order-1 ">
            {/* image */}
            <div className="max-w-[450px] mx-auto">
              <div className="flex gap-x-20 md:gap-x-24">
                <div className="pb-10">
                  <img src={onedrive} alt="" width={120} height={110} />
                </div>
                <div className="pt-10">
                  <img src={dropbox} alt="" width={120} height={110} />
                </div>
              </div>
              <div className="flex gap-x-20 md:gap-x-24">
                <div className="pb-10">
                  <img src={googleDrive} alt="" width={120} height={110} />
                </div>
                <div className="pt-10">
                  <img src={tii} alt="" width={120} height={110} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intregations;
