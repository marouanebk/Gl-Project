import "../index.css"
import React from "react";
import { algeria_cities } from "../constants";
import styles from "../style.js";

function AddCard ({visible , onClose}) {
    if (!visible) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 m-4">
            <div className="bg-black-gradient border-solid border-2 rounded-[20px] w-[70%] h-[98%] p-4 font-poppins text-primary font-medium te">
                <button onClick={onClose} className="top-0 right-2 text-white text-[20px]">X</button>
                <div className="mb-6 w-full flex flex-col ">
                    <label className="text-white p-2 text-[14px]">Announcement title:</label>
                    <input className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 " type="text" placeholder="Title"/>
                </div>
                <center>
                    <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Category:</label>
                            <select  className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="PrimarySchool">Primary school</option>
                                <option value="MiddleSchool">Middle school</option>
                                <option value="HighSchool">High school</option>
                                <option value="University">University</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center relative mb-8">
                            <label className="text-white p-2 text-[14px]">Theme:</label>
                            <select  className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Sciences">Sciences</option>
                                <option value="History">History</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Modality:</label>
                            <select  className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Sold:</label>
                            <input className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 " type="text" placeholder="Sold DA"/>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">State:</label>
                            <select  className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="">--Select State--</option>
                                {
                                    algeria_cities.map( (getState,index)=>(
                                        <option value={getState.wilaya_code} key={index}>{getState.wilaya_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Daira:</label>
                            <select  className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="">--Select Daira--</option>
                                {
                                    algeria_cities.map( (getState,index)=>(
                                        <option value={getState.wilaya_code} key={index}>{getState.daira_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Commune:</label>
                            <select  className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="">--Select Commune--</option>
                                {
                                    algeria_cities.map( (getState,index)=>(
                                        <option value={getState.id} key={index}>{getState.commune_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </center>
                <div className="mb-6 w-full flex flex-col ">
                    <label className="text-white text-[14px] p-2 ">Description :</label>
                    <textarea className="h-full w-full border-solid border-2 bg-black-gradient text-white rounded-[15px] p-4 text-[14px]"/>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-dashed h-[120px] cursor-pointer rounded-[8px] text-white">
                    <input type="file" accept="image/*"/>
                </div>
                <center>
                    <button style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-3 pb-3 pl-7 pr-7 mb-8 cursor-pointer items-start bg-blue-gradient rounded-[30px]`}>
                        Add
                    </button>
                </center>
    </div>

</div>

    )

}

export default AddCard;
