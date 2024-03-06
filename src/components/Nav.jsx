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
    <header
      className={`padding-x fixed z-50 w-full  ${
        navbar
          ? "bg-white-400 backdrop-blur-[10px] shadow-md"
          : "bg-transparent"
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
        <div
          className={`mt-5 bg-white lg:hidden ${
            toggleNavbar ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 ">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="px-4 py-[10px] text-center mt-2 hover:bg-black hover:bg-opacity-10 hover:text-white"
              >
                <a href={item.href} className="">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="px-4 py-[10px] text-center mt-2 hover:bg-black hover:bg-opacity-10 hover:text-white">
              <a href="/" className="">
                Sign In
              </a>
            </li>
            <li className="px-4 py-[10px] text-center mt-2 hover:bg-black hover:bg-opacity-10 hover:text-white">
              <a href="/" className="">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
