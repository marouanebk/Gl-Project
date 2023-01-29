import {age, edit, email, localisation, people, phone, school, work} from "../assets/index.js";
import "../index.css"
import React, {useState} from "react";
import UserInformationCard from "./UserInformationCard.jsx";

function ProfileInfoCard () {
    const [showUserInformationCard, setShowUserInformationCard] = useState(false);
    const handleOnClose = ()=>setShowUserInformationCard(false)
    return(
    <center>
        <div className="bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 overflow-x-clip font-poppins text-white font-medium z-40">
            <center>
                  <div className="relative flex flex-col items-center justify-center">
                      <img className="w-full" src={school} alt="" />
                      <img className="w-24 rounded-full absolute -bottom-12" src={people} alt="" />
                  </div>
                  <div className="flex flex-col items-center mt-8 gap-3 ">
                      <br/>
                        <span>Djemaa Abdelmalek</span>
                      <br/>
                  </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={email} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">a_djemaa@estin.dz</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={localisation} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">Algeria</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={work} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">Front-end developer </span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={phone} className="absolute ml-4 w-7" alt="Phone icon"/>
                    <span className="pl-12">0655777488</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={age} className="absolute ml-4 w-7" alt="Age icon"/>
                    <span className="pl-12">21 years old</span>
                </div>
                <div className="flex flex-row justify-center">
                    <button className= "mb-4 cursor-pointer p-6" onClick={()=>setShowUserInformationCard(true)}>
                        <img src={edit} className="w-8" alt="edit icon"/>
                        edit
                    </button>
                    <UserInformationCard onClose={handleOnClose} visible={showUserInformationCard}/>
                </div>
            </center>
        </div>
    </center>
    )
}

export default ProfileInfoCard;
