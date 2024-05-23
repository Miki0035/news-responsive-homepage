import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex w-full">
      <div className="w-full my-5 px-4 flex justify-between items-center">
        <div className="w-12">
          <img src="./logo.svg" alt="logo" />
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <img src="/icon-menu.svg" alt="menu icon" />
        </button>
        <div className="hidden md:flex w-full">
          <ul className="flex justify-evenly w-full items-end">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#new">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          open
            ? "block absolute right-0 h-screen w-64 bg-offWhite flex flex-col"
            : "hidden"
        }
      >
        <div className="flex justify-end my-8">
          <button className="pr-4 w-10" onClick={() => setOpen(!open)}>
            <img src="/icon-menu-close.svg" alt="close logo" />
          </button>
        </div>
        <ul className="flex flex-col px-8 my-12">
          <li className="my-3">
            <a onClick={() => setOpen(!open)} href="#home">
              Home
            </a>
          </li>
          <li className="my-3">
            <a onClick={() => setOpen(!open)} href="#new">
              New
            </a>
          </li>
          <li className="my-3">
            <a onClick={() => setOpen(!open)} href="#">
              Popular
            </a>
          </li>
          <li className="my-3">
            <a onClick={() => setOpen(!open)} href="#">
              Trending
            </a>
          </li>
          <li className="my-3">
            <a onClick={() => setOpen(!open)} href="#">
              Categories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;