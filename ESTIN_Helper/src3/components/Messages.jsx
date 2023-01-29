

import React from 'react'
import {arrow, delete_, people} from "../assets/index.js";
import {Link} from "react-router-dom";

const Messages = () => {
    return (
        <section>
            <div className="w-full h-[600px] bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 overflow-x-clip p-8 font-poppins text-white font-medium">
                <div className="sm:flex justify-between items-center">
                    <img className="w-10 rounded-full absolute " src={people} alt="" />
                    <span className="pl-12 text-[16px]">abdelmalek djemaa</span>
                    <div className="flex items-start gap-6 ml-7">
                        <Link className="cursor-pointer" to={'/Sign-in'}>
                            <img src={delete_} className="w-6" alt="favorite icon"/>
                        </Link>
                    </div>
                </div>
                <div className="p-4 w-full flex justify-center mt-[440px]">
                    <div className="w-full flex flex-col ">
                        <input className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 " type="text" placeholder="write message"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="ml-4">
                            <img src={arrow} className="w-10" alt="edit icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Messages