import React, { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark-back w-screen fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
      <div className="flex items-center">
        <a href="/" className="text-light-text font-bold text-lg">Logo</a>
      </div>

      <div className="flex md:hidden">
        <button className="p-2 rounded-md focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <XCircleIcon className="h-6 w-6 text-light-text" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-light-text" />
          )}
        </button>
      </div>

      <div className={`md:flex flex-grow items-center justify-center ${isOpen ? "block" : "hidden"}`}>
        <ul className="md:flex items-center space-x-4">
          <li><a href="/" className="text-light-text mx-5 text-xl mt-4 hover:text-text-light">Home</a></li>
          <li><a href="/about" className="text-light-text mx-5 text-xl mt-4 hover:text-text-light">About</a></li>
          <li><a href="/crow" className="text-light-text mx-5 text-xl mt-4 hover:text-text-light">Crow</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
