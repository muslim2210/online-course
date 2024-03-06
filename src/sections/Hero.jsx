import React from "react";
import { heroTeen, bgWave } from "../assets/images";
import { badge1, badge2, badge21, badge4, playButton } from "../assets/icons";
import Badge from "../components/Badge";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="py-12 lg:py-20 lg:pt-14 max-container xl:px-11">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="relative lg:order-2 lg:w-1/2">
          <Badge
            containerStyles="absolute top-[29%] left-[2px] md:left-[9rem] lg:left-[4rem]"
            variant="badge"
            icon={badge2}
            title="250k"
            badgeText="Asisted Students"
          />
          <Badge
            containerStyles="absolute top-[50%] lg:top-[60%] right-[2rem] md:right-[7rem] lg:right-[4rem]"
            variant="badge2"
            icon={badge21}
            title="Congratulations"
            badgeText="Your admission completed"
          />
          <Badge
            containerStyles="absolute top-[70%] lg:top-[80%] left-[10px] md:left-[9rem] lg:left-[2rem]"
            variant="badge2"
            icon={badge4}
            title="User Experience Class"
            badgeText="Today at 12.00 PM"
          />
          <div className="absolute top-[10%] right-[3rem] md:right-[10rem] lg:right-[8rem]">
            <img src={badge1} alt="" width={90} height={90} />
          </div>
          {/* hero */}
          <div className="w-[350px] md:w-[400px] h-[500px] lg:w-[450px] py-5 lg:py-0 mx-auto">
            <img src={heroTeen} alt="" />
          </div>
        </div>
        <div className="flex flex-col mt-2 md:mt-20 max-auto p-4 lg:px-10 lg:order-1 lg:w-1/2 lg:mt-28">
          {/* text */}
          <h1 className="h1 text-center max-w-[500px] mx-auto lg:text-start lg:mx-0">
            <span className="text-secondary">Studying</span> Online is now much
            easier
          </h1>
          <p className="info-text font-nunito max-w-[300px] md:max-w-[500px] mx-auto lg:mx-0 text-center lg:text-start mt-3">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-start mt-7 lg:mt-0">
            <Button>Join for free</Button>
            <div className="flex items-center mt-5 md:mt-0 md:pt-6 px-5 md:px-2">
              <img
                src={playButton}
                width={100}
                height={100}
                alt=""
                className="cursor-pointer"
              />
              <p className="font-nunito pb-6">Watch how it works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
