import React, { useState } from "react";
import {close, menu} from "../assets";
import {HomeBar} from "../constants/index.js";

function Navbar3 (){
    const [toggle, setToggle] = useState(false);
    return (
        <section>
        <nav className="flex flex-col justify-center items-center">
            <h1 className="items-center absolute mx-8 mb-4 font-poppins font-semi-bold ss:text-[20px] text-white ss:leading-[100.8px] leading-[75px]">
                ESTIN <span className="text-gradient"> Helper</span>
            </h1>
            <ul className="list-none mt-16 lg:flex hidden items-center flex-1">
                    {HomeBar.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[35px] h-[35px] object-contain cursor-pointer ${
                                index !== HomeBar.length - 1 ? "mr-12" : "mr-0"
                            }`}
                            onClick={() => window.open(social.link,"_self")}
                        />
                    ))}
            </ul>
            <div className="lg:hidden flex flex-1 justify-end items-center z-50 ">
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
                        {HomeBar.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[30px] h-[30px] object-contain cursor-pointer m-2 items-center ${
                                    index !== HomeBar.length - 1 ? "mr-2" : "mr-0"
                                }`}
                                onClick={() => window.open(social.link,"_self")}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        </section>
    );
}

export default Navbar3;
