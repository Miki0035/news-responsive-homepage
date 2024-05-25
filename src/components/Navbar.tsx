import { NavbarProp } from "../types";
import React from "react";

const Navbar: React.FC<NavbarProp> = ({ openNav, changeState }) => {
  return (
    <nav className="relative flex w-full lg:px-24 lg:py-10">
      <div className="w-full my-5 px-4 flex justify-between items-center">
        <div className="w-12">
          <img src="./logo.svg" alt="logo" />
        </div>
        <button className="md:hidden" onClick={() => changeState()}>
          <img src="/icon-menu.svg" alt="menu icon" />
        </button>
        <div className="hidden md:flex md:justify-end w-96 lg:w-2/5">
          <ul className="flex justify-evenly w-full ">
            <li className="hover:text-softRed">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-softRed">
              <a href="#new">New</a>
            </li>
            <li className="hover:text-softRed">
              <a href="#">Popular</a>
            </li>
            <li className="hover:text-softRed">
              <a href="#">Trending</a>
            </li>
            <li className="hover:text-softRed">
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          openNav
            ? " fixed w-screen h-screen bg-veryDarkBlue z-0 opacity-45"
            : "hidden"
        }
      ></div>
      <div
        className={
          openNav
            ? "block absolute right-0 h-screen w-64 bg-offWhite flex flex-col"
            : "hidden"
        }
      >
        <div className="flex justify-end my-8 z-40">
          <button className="pr-4 w-10" onClick={() => changeState()}>
            <img src="/icon-menu-close.svg" alt="close logo" />
          </button>
        </div>
        <ul className="flex flex-col px-8 my-12 z-50">
          <li className="hover:text-softRed my-3">
            <a onClick={() => changeState()} href="#home">
              Home
            </a>
          </li>
          <li className="hover:text-softRed my-3">
            <a onClick={() => changeState()} href="#new">
              New
            </a>
          </li>
          <li className="hover:text-softRed my-3">
            <a onClick={() => changeState()} href="#">
              Popular
            </a>
          </li>
          <li className="hover:text-softRed my-3">
            <a onClick={() => changeState()} href="#">
              Trending
            </a>
          </li>
          <li className="hover:text-softRed my-3">
            <a onClick={() => changeState()} href="#">
              Categories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
