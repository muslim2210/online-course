import React from "react";

const CardImage = ({ imgURL, label, button }) => {
  return (
    <div className="w-full h-[260px] flex flex-col justify-center items-center relative">
      <img
        src={imgURL}
        alt=""
        className="object-cover w-full h-[260px] rounded-xl cursor-pointer"
      />
      <div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col items-center gap-y-4">
          <h3 className="text-white uppercase font-extralight text-lg">
            {label}
          </h3>
          <button className="text-white border-2 border-white rounded-full py-[10px] px-[20px] text-sm hover:bg-[#23BDEE]">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
