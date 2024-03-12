import React from "react";

const ButtonNews = (props) => {
  const { children, variant = "font-medium text-base px-4" } = props;
  return (
    <button
      className={`bg-[#F4C467] text-[#252641] cursor-default py-1 rounded-full ${variant} uppercase font-poppins`}
    >
      {children}
    </button>
  );
};

export default ButtonNews;
