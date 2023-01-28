import "../index.css"
import React, { useState, useEffect, useCallback } from 'react'
import { algeria_cities } from "../constants";
import styles from "../style.js";
import axios from 'redaxios';
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";


function AddCard({ visible, onClose }) {
    let {user} = useContext(AuthContext)

    const [state, setState] = useState({
        title: '',
        description: '',
        category: '',
        theme: '',
        modality: '',
        sold: 0,
        commune: '',
        wilaya: '',
    });
    const [selectedFiles, setSelectedFiles] = useState([]);

    function updateForm(value) {
        return setState((prev) => {
            return { ...prev, ...value };
        });
    }

    function onFileChange(e) {
        return setState((prev) => {
            return { ...prev, ...e.target.files[0] };
        });
    }

    const handleFileChange = (event) => {
        // setSelectedFiles(event.target.files);
        setSelectedFiles(selectedFiles.concat(Array.from(event.target.files)));
        event.target.value = null
    };

    async function onSubmit(e) {
        e.preventDefault();
        var temp = false;
        const editedPerson = {

            title: state.title,
            description: state.description,
            category: state.category,
            theme: state.theme,
            modality: state.modality,
            sold: state.sold,
            commune: state.commune,
            wilaya: state.wilaya,
            uploaded_images: state.uploaded_images,
        };
        var formData = new FormData();
        formData.append('author', user.user_id);
        formData.append('created_by', user.user_id);

        formData.append('title', state.title);
        formData.append('description', state.description);
        formData.append('category', state.category);
        formData.append('theme', state.theme);
        formData.append('modality', state.modality);
        formData.append('sold', state.sold);
        formData.append('commune', state.commune);
        formData.append('wilaya', state.wilaya);
        // formData.append('uploaded_images', selectedFiles);
        Array.from(selectedFiles).forEach((file) => {
            formData.append("uploaded_images", file);
        });
        console.log("userid"+user.user_id);
        console.log(user);
        // console.log(selectedFiles);

        // await fetch(`http://127.0.0.1:8000/api/products/`, {
        //     method: "POST",
        //     body: JSON.stringify(editedPerson),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        const response = await axios.post('http://127.0.0.1:8000/api/products/', formData);
        console.log(response);

        // window.alert("Edited successfully first condition")

    }

    if (!visible) return null;
    return (
        <form onSubmit={onSubmit}>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 m-4">
                <div className="bg-black-gradient border-solid border-2 rounded-[20px] w-[70%] h-[98%] p-4 font-poppins text-primary font-medium te">
                    <button onClick={onClose} className="top-0 right-2 text-white text-[20px]">X</button>
                    <div className="mb-6 w-full flex flex-col ">
                        <label className="text-white p-2 text-[14px]">Announcement title:</label>
                        <input className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 " value={state.title} onChange={(e) => updateForm({ title: e.target.value })} type="text" placeholder="Title" />
                    </div>
                    <center>
                        <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">Category:</label>
                                <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={state.category} onChange={(e) => updateForm({ category: e.target.value })}>
                                    <option value="PrimarySchool">Primary school</option>
                                    <option value="MiddleSchool">Middle school</option>
                                    <option value="HighSchool">High school</option>
                                    <option value="University">University</option>
                                </select>
                            </div>
                            <div className="flex justify-start items-center relative mb-8">
                                <label className="text-white p-2 text-[14px]">Theme:</label>
                                <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={state.theme} onChange={(e) => updateForm({ theme: e.target.value })}>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Sciences">Sciences</option>
                                    <option value="History">History</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">Modality:</label>
                                <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={state.modality} onChange={(e) => updateForm({ modality: e.target.value })}>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">Sold:</label>
                                <input className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-4 " value={state.sold} onChange={(e) => updateForm({ sold: e.target.value })} type="number" placeholder="Sold DA" />
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">State:</label>
                                <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={state.wilaya} onChange={(e) => updateForm({ wilaya: e.target.value })}>
                                    <option value="">--Select State--</option>
                                    {
                                        algeria_cities.map((getState, index) => (
                                            <option value={getState.wilaya_code} key={index}>{getState.wilaya_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">Daira:</label>
                                <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]" value={state.commune} onChange={(e) => updateForm({ commune: e.target.value })}>
                                    <option value="">--Select Daira--</option>
                                    {
                                        algeria_cities.map((getState, index) => (
                                            <option value={getState.wilaya_code} key={index}>{getState.daira_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <label className="text-white p-2 text-[14px]">Commune:</label>
                                <select className="h-12 w-full border-solid border-2 bg-black-gradient text-white rounded-[50px] p-2 text-[14px]">
                                    <option value="">--Select Commune--</option>
                                    {
                                        algeria_cities.map((getState, index) => (
                                            <option value={getState.id} key={index}>{getState.commune_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </center>
                    <div className="mb-6 w-full flex flex-col ">
                        <label className="text-white text-[14px] p-2 ">Description :</label>
                        <textarea className="h-full w-full border-solid border-2 bg-black-gradient text-white rounded-[15px] p-4 text-[14px]" value={state.description} onChange={(e) => updateForm({ description: e.target.value })} />
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-dashed h-[120px] cursor-pointer rounded-[8px] text-white">
                        <input type="file" accept="image/*" multiple onChange={handleFileChange} />
                    </div>
                    <center>
                        <button type='submit' style={{ cursor: "pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-3 pb-3 pl-7 pr-7 mb-8 cursor-pointer items-start bg-blue-gradient rounded-[30px]`}>
                            Add
                        </button>
                    </center>
                </div>

            </div>
        </form>

    )

}

export default AddCard;
