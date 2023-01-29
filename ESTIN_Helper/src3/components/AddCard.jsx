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
                <div className="flex items-center justify-center w-full">
                    <label htmlFor=""
                           className="flex flex-col items-center justify-center w-full h-[120px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                className="font-semibold">Click to upload images</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                800x400px)</p>
                        </div>
                        <input id="" type="file" className="hidden" accept="image/*"/>
                    </label>
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
