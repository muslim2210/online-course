import React, { Children } from "react";

const ButtonFeatures = (props) => {
  const { children, variant = "lg:text-xl md:px-10 md:py-5" } = props;
  return (
    <button
      className={`font-nunito text-secondary border-2 border-secondary rounded-full ${variant} px-5 py-3 md:px-10 md:py-5  hover:bg-secondary hover:text-white`}
    >
      {children}
    </button>
  );
};

export default ButtonFeatures;
