import {contacts, people} from "../assets/index.js";
import "../index.css"
import React from "react";

function ContactCard () {
    return(
        <center>
            <div className="h-[600px] bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 overflow-x-clip font-poppins text-white font-medium">
                    <div className="flex justify-center items-center m-4">
                        <img src={contacts} className="w-8" alt="Location icon"/>
                        <span className="text-[20px] p-2">Contacts</span>
                    </div>
                <div>
                    <ul>
                        <li className="flex justify-start m-4 bg-black-gradient rounded-xl p-8 hover:border-2 duration-200">
                            <a href='#'>
                                <img className="w-10 rounded-full absolute " src={people} alt="" />
                                <span className="pl-12 text-[16px]">abdelmalek djemaa</span>
                            </a>
                        </li>
                        <li className="flex justify-start m-4 bg-black-gradient rounded-xl p-8 hover:border-2 duration-200 ">
                            <a href='#'>
                                <img className="w-10 rounded-full absolute " src={people} alt="" />
                                <span className="pl-12 text-[16px]">abdelmalek djemaa</span>
                            </a>
                        </li>
                        <li className="flex justify-start m-4 bg-black-gradient rounded-xl p-8 hover:border-2 duration-200 ">
                            <a href='#'>
                                <img className="w-10 rounded-full absolute " src={people} alt="" />
                                <span className="pl-12 text-[16px]">abdelmalek djemaa</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </center>
    )
}

export default ContactCard;