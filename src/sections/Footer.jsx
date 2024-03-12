import React from "react";
import { logoFooter, hr } from "../assets/icons";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="bg-[#252641]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:gap-y-10 max-w-[300px] md:max-w-[500px] mx-auto py-4 lg:py-8">
          <div className="flex gap-x-5 items-center justify-center md:max-w-[280px] mx-auto">
            {/* logo */}
            <div className="w-[120px] md:w-[150px]">
              <img src={logoFooter} alt="" />
            </div>
            <img src={hr} alt="" />
            <h5 className="font-semibold text-white text-base lg:text-xl">
              Virtual Class for Zoom
            </h5>
          </div>

          <div className="flex flex-col md:mt-2 lg:mt-6">
            <h5 className="text-[#B2B3CF] text-xl md:text-2xl text-center font-semibold">
              Subscribe to get our Newsletter
            </h5>
            {/* form */}
            <div className="flex flex-col md:flex-row md:mx-auto mt-7 md:mt-8 font-poppins gap-y-4 gap-x-4">
              <input
                type="text"
                name="subscribe"
                placeholder="Your Email"
                className="rounded-full bg-transparent py-3 px-5 font-semibold text-[#83839A] placeholder:text-[#83839A] border border-[#83839A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary md:text-[20px] w-full md:max-w-[300px]"
              />
              {/* button */}
              <button className="bg-[#545AE8] text-white rounded-full py-3 px-5 md:text-[20px] font-semibold w-full md:w-[150px]">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 justify-center mt-2 md:mt-4 lg:mt-6 mb-2">
            {/* copyright */}
            <div className="flex gap-x-3 flex-wrap text-[#B2B3CF] text-base md:text-xl justify-center">
              <a href="#">Carrers</a>
              <p>|</p>
              <a href="#">Privacy Policy</a>
              <p>|</p>
              <a href="#">Terms & Conditions</a>
            </div>
            <p className="text-[#B2B3CF] text-center text-base md:text-xl">
              © 2024 Bukhori Muslim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
