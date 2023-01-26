import React, { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style.js";
import {Link} from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <h1 className="flex-1 font-poppins font-semi-bold ss:text-[22px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
            ESTIN <span className="text-gradient"> Helper</span>
        </h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>))}
          <li>
              <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-1 ml-8 text-[16px]  pt-3 pb-3 pl-6 pr-6 mb-0 font-poppins text-primary font-medium cursor-pointer items-start bg-blue-gradient rounded-[30px]`} to={'/Sign-in'}>
                  Sign in
              </Link>
          </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
              <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-1 text-[15px] mb-0 font-poppins font-medium cursor-pointer text-[16px] items-start`} to={'/Sign-in'}>
                  Sign in
              </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
