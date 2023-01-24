import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import {Link} from "react-router-dom";
import styles from "../style.js";

function Navbar1 (){
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-0 justify-between items-center navbar">
      <img src={logo} alt="EstinHelper" className="w-[100px] h-[100px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-1 text-[16px]  pt-2.5 pb-2.5 pl-7 pr-7 mb-0 font-poppins text-primary font-medium cursor-pointer text-[16px] items-start bg-blue-gradient rounded-[30px]`} to={'/'}>
              Back
          </Link>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center ">
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

export default Navbar1;
