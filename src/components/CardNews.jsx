import React from "react";
import ButtonNews from "./ButtonNews";

const CardNews = ({ imgURL, label, title, text }) => {
  return (
    <div className="flex flex-row gap-x-4 md:gap-x-7">
      <div className="max-w-[170px] md:max-w-[220px] w-2/5 ">
        <div className="relative w-full">
          <img src={imgURL} alt="" />
          <div className="absolute z-10 top-[60%] md:top-[70%] right-1 lg:right-2">
            <div className="max-w-[130px]">
              <ButtonNews variant="px-2 text-xs font-light">{label}</ButtonNews>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 md:gap-y-4 w-3/5">
        <h4 className="md:hidden text-[#252641] font-poppins text-[16px] ">
          {title.substring(0, 40)}...
        </h4>
        <h4 className="hidden md:block text-[#252641] font-extralight font-poppins text-[16px] md:text-[20px]">
          {title}
        </h4>
        <p className="md:hidden text-[#696984] font-poppins font-light text-base md:text-lg">
          {text.substring(0, 40)}...
        </p>
        <p className="hidden md:block lg:hidden text-[#696984] font-poppins font-light text-base md:text-[18px]">
          {text.substring(0, 120)}...
        </p>
        <p className="hidden lg:block text-[#696984] font-poppins font-light text-base md:text-[18px]">
          {text.substring(0, 70)}...
        </p>
      </div>
    </div>
  );
};

export default CardNews;
