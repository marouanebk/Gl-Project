import React, { useState } from "react";
import {close, facebook, menu} from "../assets";
import {socialMedia} from "../constants/index.js";

function Navbar2 (){
    const [toggle, setToggle] = useState(false);
    return (
        <section>
        <nav className="w-full flex py-0 justify-between items-center navbar">
            <h1 className="flex-1 font-poppins font-semi-bold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]">
                ESTIN <span className="text-gradient"> Helper</span>
            </h1>
            <div className="hidden sm:flex justify-start items-center min-w-[410px]">
                <img src={facebook} className="absolute ml-4 w-8" alt="Search"/>
                <input type="text" placeholder="Search"/>
            </div>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[30px] h-[30px] object-contain cursor-pointer ${
                                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
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
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[65px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {socialMedia.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[30px] h-[30px] object-contain cursor-pointer m-2 items-center ${
                                    index !== socialMedia.length - 1 ? "mr-2" : "mr-0"
                                }`}
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
            <div className="sm:hidden flex flex-1 justify-center items-center ">
                <div className="flex justify-start items-center mb-4 m-0">
                    <img src={facebook} className="absolute ml-4 w-6" alt="Search icon"/>
                    <input className="pl-12" type="text" placeholder="Search"/>
                </div>
            </div>
        </section>
    );
}

export default Navbar2;
