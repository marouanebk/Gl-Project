import "../index.css"
import { algeria_cities } from "../constants/index.js";
import styles from "../style.js";
import React, { useState, useEffect, useCallback } from 'react'
import { SnackBar } from "./index.js";



function FilterCard({ records, handleChange, visible, onClose }) {
    const [wilaya, setwilaya] = useState('');
    const [commune, setcommune] = useState('');
    const [start, setstart] = useState('');
    const [end, setend] = useState('');
    const [ShowSnackBar , setShowSnackBar] = useState(false);
    const handleOnClose = () => setShowSnackBar(false) ;

    const filterHandler = async (event) => {
        event.preventDefault();
        console.log("in filter");

        let keyword = "?";
        if (wilaya != "") { keyword = keyword + 'wilaya=' + wilaya; }
        if (commune != "") {
            if (keyword != "?") keyword = keyword + "&";
            keyword = keyword + 'commune=' + commune;
        }
        if (start != "") {
            if (keyword != "?") keyword = keyword + "&";
            keyword = keyword + 'created__gte=' + start + "T00:00:00.000000Z"
        };
        if (end != "") {
            if (keyword != "?") keyword = keyword + "&";
            keyword = keyword + 'created__lte=' + end + "T00:00:00.000000Z"
        };
        console.log(keyword);
        keyword = keyword.replace(/ /g, "+");


        // http://127.0.0.1:8000/api/annonces/custom/created__get2022-12-13T00:00:00.000000Z
        let results = await fetch(`http://127.0.0.1:8000/api/annonces/custom/${keyword}`);
        results = await results.json();
        if (results) {
            handleChange(results);
            setShowSnackBar(true);
        }

  
    }
    // const [records, setRecords] = useState([]);

    if (!visible) return null;
    const Close = () =>    {
        setShowSnackBar(false);
        onClose();

    }

    return (
        <form onSubmit={filterHandler}>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 m-4">
                <div className="bg-black-gradient border-solid border-2 rounded-[20px] w-[550px] h-[65%] p-4 font-poppins text-primary font-medium te">
                    <button onClick={Close} className="right-0 text-white text-[20px]">X</button>
                    <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Category:</label>
                            <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" >
                                <option value="PrimarySchool">Primary school</option>
                                <option value="MiddleSchool">Middle school</option>
                                <option value="HighSchool">High school</option>
                                <option value="University">University</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center relative mb-8">
                            <label className="text-white p-2 text-[14px]">Theme:</label>
                            <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Sciences">Sciences</option>
                                <option value="History">History</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Modality:</label>
                            <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">State:</label>
                            <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={wilaya} onChange={(e) => setwilaya(e.target.value)}>
                                <option value="">--Select State--</option>
                                {
                                    algeria_cities.map((getState, index) => (
                                        <option value={getState.wilaya_name} key={index}>{getState.wilaya_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-8 m-0">
                            <label className="text-white p-2 text-[14px]">Commune:</label>
                            <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={commune} onChange={(e) => setcommune(e.target.value)}>
                                <option value="">--Select Commune--</option>
                                {
                                    algeria_cities.map((getState, index) => (
                                        <option value={getState.commune_name} key={index}>{getState.commune_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">start:</label>
                                <input type="date" className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={start} onChange={(e) => setstart(e.target.value)} />
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">end:</label>
                                <input type="date" className="h-12 w-full color-white border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={end} onChange={(e) => setend(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <center>
                        <button  type="submit" style={{ cursor: "pointer" }} className={`${styles.paragraph}left-0 text-[20px]  pt-3 pb-3 pl-7 pr-7 items-center bg-blue-gradient rounded-[30px]`}>
                            Filter
                        </button>
                        <SnackBar onClose={handleOnClose} visible = {ShowSnackBar}/>
                    </center>
                </div>
            </div>
        </form>

    )

}

export default FilterCard;
