import "../index.css"
import React from "react";
import styles from "../style.js";

function UserInformationCard ({visible , onClose}) {
    if (!visible) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 m-4">
            <div className="bg-black-gradient border-solid border-2 rounded-[20px] w-[520px] h-[98%] p-4 font-poppins text-primary">
                <button onClick={onClose} className="right-0 text-white text-[20px]">X</button>
                <div className=" items-center flex flex-row sm:justify-start justify-center  my-4">
                    <label className="text-white p-2 text-[14px]">Name:</label>
                    <input className="h-11 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 text-[14px]" type="text" placeholder="Name"/>
                </div>
                <div className=" items-center flex flex-row sm:justify-start justify-center my-4">
                    <label className="text-white p-2 text-[14px]">Localisation:</label>
                    <input className="h-11 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 text-[14px]" type="text" placeholder="Localisation"/>
                </div>
                <div className=" items-center flex flex-row sm:justify-start justify-center my-4">
                    <label className="text-white p-2 text-[14px]">Work:</label>
                    <input className="h-11 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 text-[14px] " type="text" placeholder="Work"/>
                </div>
                <div className=" items-center flex flex-row sm:justify-start justify-center my-4">
                    <label className="text-white p-2 text-[14px]">Phone:</label>
                    <input className="h-11 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 text-[14px]" type="text" placeholder="Phone"/>
                </div>
                <div className=" items-center flex flex-row sm:justify-start justify-center my-4">
                    <label className="text-white p-2 text-[14px]">Age:</label>
                    <input className="h-11 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 text-[14px]" type="text" placeholder="Age"/>
                </div>
                <div className="flex flex-row justify-between items-center p-2 ">
                    <div className="flex items-center justify-center w-full mx-4">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-[200px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload Profile image</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                    800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" accept="image/*"/>
                        </label>
                    </div>
                    <div className="flex items-center justify-center w-full mx-4">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-[200px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload Cover image</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                    800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" accept="image/*"/>
                        </label>
                    </div>
                </div>
                <center>
                    <button style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-3 pb-3 pl-7 pr-7 mb-8 cursor-pointer items-start bg-blue-gradient rounded-[30px]`}>
                        Update
                    </button>
                </center>
            </div>

        </div>

    )

}

export default UserInformationCard;
