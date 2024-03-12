import React from "react";
import ButtonNews from "./ButtonNews";

const CardNewsUtama = ({ imgURL, label, title, text }) => {
  return (
    <div className="w-full flex flex-col gap-y-3 md:gap-y-5 2xl:gap-y-4">
      <img src={imgURL} alt="" />

      {/* <badgeNews>news</badgeNews> */}
      <div className="max-w-[130px] mt-2">
        <ButtonNews>{label}</ButtonNews>
      </div>
      <h4 className="text-[#252641] font-poppins text-[20px] md:text-[24px]">
        {title}
      </h4>
      <p className="text-[#696984] font-poppins text-base md:text-lg">
        {text.substring(0, 120)}...
      </p>
      <a href="#" className="text-[#696984] text-underline">
        <p className="underline">Read more</p>
      </a>
    </div>
  );
};

export default CardNewsUtama;
