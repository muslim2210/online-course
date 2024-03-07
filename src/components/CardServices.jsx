import React from "react";

const CardServices = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full max-w-[350px] h-[320px] flex flex-col justify-center items-center relative rounded-[20px] shadow-2xl border-1 border-slate-gray">
      <div className="absolute -top-[60px]">
        <img src={imgURL} alt={label} width={120} height={120} />
      </div>
      <div className="flex flex-col gap-y-7 px-7 py-2">
        <h4 className="text-xl md:text-lg lg:text-xl font-semibold text-center text-primary">
          {label}
        </h4>
        <p className="text-center md:text-sm lg:text-base text-subColor">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default CardServices;
