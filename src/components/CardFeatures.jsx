import React from "react";

const CardFeatures = ({ imgURL, subText }) => {
  return (
    <>
      <div className="flex gap-x-6 items-center gap-y-6">
        <div className="relative">
          <div className="shadow-xl flex rounded-full w-10 p-2 h-10 items-center justify-center">
            <img src={imgURL} alt="" width={18} height={18} />
          </div>
        </div>
        <p className="text-sm text-subColor font-poppins max-w-[300px]">
          {subText}
        </p>
      </div>
    </>
  );
};

export default CardFeatures;
