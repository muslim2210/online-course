import React, { useState } from "react";
import { navLinks } from "../constant";
import { logo1, logoPolygon, menuHamb, cross } from "../assets/icons";
import Button from "./Button";

const Nav = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // change background navbar logic
  const changeBackgorundNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgorundNavbar);

  return (
    <>
      <header
        className={`padding-x fixed z-50 w-full  ${
          navbar ? "bg-white backdrop-blur-[10px] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <div className="flex items-center md:order-2 lg:order-none">
              <img src={logoPolygon} alt="" width={50} height={50} />
              <img
                src={logo1}
                alt=""
                width={80}
                height={50}
                className="absolute z-3 translate-x-4"
              />
            </div>

            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="font-poppins leading-normal text-[18px] text-[#252641]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
              className="hidden max-lg:block cursor-pointer md:order-1"
            >
              <img
                src={toggleNavbar ? cross : menuHamb}
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className="hidden md:flex gap-x-4 md:order-3">
              <Button variant="bg-white text-[#252641]">Sign in</Button>
              <Button>Sign Up</Button>
            </div>
          </nav>
        </div>
      </header>
      {/* mobile-menu */}
      <div
        className={`bg-white fixed z-50 w-[80%] h-full md:w-[60%] top-[60px] overflow-y-auto bottom-0 py-20 pl-4
        duration-500 mt-5 shadow-xl lg:hidden ${
          toggleNavbar ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col gap-4 h-[500px]">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="px-4 py-[10px] text-center mt-2 hover:text-primary"
            >
              <a href={item.href} className="text-lg uppercase">
                {item.label}
              </a>
            </li>
          ))}
          <li className="md:hidden max-w-[150px] mx-auto mt-5">
            <div className="flex flex-col justify-center gap-y-5">
              <Button variant="bg-white text-black font-bold">Log In</Button>
              <Button>Sign Up</Button>
            </div>
          </li>
        </ul>
        <div className="flex flex-col gap-y-4 justify-center mt-2 md:mt-4 lg:mt-6 mb-2 max-w-[200px] mx-auto">
          {/* copyright */}
          <div className="flex gap-x-3 flex-wrap text-[#B2B3CF] text-base justify-center">
            <a href="#">Carrers</a>
            <p>|</p>
            <a href="#">Privacy Policy</a>
            <p>|</p>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
