import React from "react";

const Badge = ({ containerStyles, title, badgeText, icon, variant }) => {
  return (
    <div className={`${containerStyles}`}>
      <div className={`${variant}`}>
        <div className="p-4">
          <img src={icon} className="" width={30} height={30} alt="" />
        </div>
        <div className="flex flex-col justify-start">
          <div className="font-nunito font-semibold text-primary text-start">
            {title}
          </div>
          <div className="font-nunito text-[13px] text-black">{badgeText}</div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
