import {email, localisation, people, school, work} from "../assets/index.js";
import "../index.css"
import React, {useState} from "react";
import styles from "../style.js";
import UserInformationCard from "./UserInformationCard.jsx";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";

function ProfileCard () {
    let {user} = useContext(AuthContext)
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
                      {user && 
                      
                      <span>{user.username}</span>
                     }                      <br/>
                  </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={email} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">a_djemaa@estin.dz</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={localisation} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">Zighoud youcef Constantine</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={work} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">Front-end developer </span>
                </div>
                <button style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-3 pb-3 pl-7 pr-7 mb-8 cursor-pointer items-start bg-blue-gradient rounded-[30px]`} onClick={()=>setShowUserInformationCard(true)}>
                    Profile
                </button>
                <UserInformationCard onClose={handleOnClose} visible={showUserInformationCard}/>
            </center>
        </div>
    </center>
    )
}

export default ProfileCard;
