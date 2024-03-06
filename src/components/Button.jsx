import React from "react";

const Button = (props) => {
  const {
    children,
    variant = "bg-secondary hover:bg-secondary/70 text-white",
  } = props;
  return (
    <button
      className={`font-poppins max-w-[200px] py-[10px] px-[25px] ${variant} rounded-full shadow-md`}
    >
      {children}
    </button>
  );
};

export default Button;
