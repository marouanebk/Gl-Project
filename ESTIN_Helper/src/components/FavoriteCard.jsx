import {star} from "../assets/index.js";
import "../index.css"
import React from "react";

function FavoriteCard () {
    return(
        <center>
            <div className="min-w-[350px] bg-black-gradient rounded-3xl flex flex-col relative gap-4 overflow-x-clip mt-8 mr-8 ml-4 font-poppins text-white font-medium">
                    <div className="flex justify-start items-center relative mb-6 p-12">
                        <img src={star} className="absolute w-8" alt="Location icon"/>
                        <span className="pl-10 text-[20px]">Favorites</span>
                    </div>
            </div>
        </center>
    )
}

export default FavoriteCard;