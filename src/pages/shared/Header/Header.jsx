import { Button, Navbar } from "flowbite-react";
import React, { createContext, useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Header.css'
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/solid";
import logo1 from '../../../assets/logo.png'
import logo2 from '../../../assets/Frame.png'
import { styleContext } from "../../../Provider/StyleProvider/StyleProvider";


const Header = ({style}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);                 
  return (       
    <div>
      <div className="  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between gap-40 lg:px-24">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              <img className="w-20 logo " src={logo2} alt="" />
            </span>
          </Link>

          {/* Nav Items Section */}
          <ul className={style == 'white'?"items-center text-white hidden space-x-8 lg:flex":"items-center text-black hidden space-x-8 lg:flex"}>
            <li>
              <MagnifyingGlassIcon className="w-5 top-3  absolute "></MagnifyingGlassIcon>
              <input
                className=" search-field ps-6 "
                type="text"
                placeholder="search your destination"
              />
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
              to='/destination'
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink
              to='/blog'
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
              to='/contact'
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to='/login'>
                <button className="bg-orange-400 px-6 py-2 rounded-md">
                  Login
                </button>
              </Link>
            </li>
          </ul>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className={style=='white'?"w-5 text-white":"w-5 text-black"} />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <img className="w-20" src={logo2} alt="" />
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-black" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          News
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/books"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Destination
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to='/login'>
                          <button className="bg-orange-400 px-6 py-2 rounded-md">
                            Login
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
