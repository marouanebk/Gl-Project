import {facebook, people, school} from "../assets/index.js";
import "../index.css"
import React, {useState} from "react";
import styles from "../style.js";
import {AddCard} from "./index.js";

function ProfileCard () {
    const [showAddCard, setShowAddCard] = useState(false);
    const handleOnClose = ()=>setShowAddCard(false)
    return(
    <center>
        <div className="min-w-[350px] bg-black-gradient rounded-3xl flex flex-col relative gap-4 overflow-x-clip mt-8 ml-8 font-poppins text-white font-medium">
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
                    <img src={facebook} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">Zighoud youcef Constantine</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={facebook} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">Constantine</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={facebook} className="absolute ml-4 w-7" alt="Location icon"/>
                    <span className="pl-12">Constantine</span>
                </div>
                <button style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-3 pb-3 pl-7 pr-7 mb-8 cursor-pointer items-start bg-blue-gradient rounded-[30px]`} onClick={()=>setShowAddCard(true)}>
                    Profile
                </button>
                <AddCard onClose={handleOnClose} visible={showAddCard}/>
            </center>
        </div>
    </center>
    )
}

export default ProfileCard;
