import React from 'react'
import {school, twitter} from "../assets/index.js";


const AnnouncementCard = () => {
    return (
        <section>
        <div className=" min-w-full flex flex-col mt-4 ml-2 mr-2 p-4 rounded-[16px] gap-4 bg-black-gradient font-poppins text-white font-medium">
            <div>
                <span>Djemaa Abdelmalek</span>
                <br/>
                <span>Description ...</span>
            </div>
            <img className="w-full max-h-50 rounded-[8px] object-cover" src={school} alt="" />
            <div className="flex items-start gap-6">
                <img className="cursor-pointer" src={twitter} alt="" />
                <img className="cursor-pointer" src={twitter} alt="" />
                <img className="cursor-pointer" src={twitter} alt="" />
            </div>
            <div>
                <span>Comments1</span>
                <br/>
                <span>Comments2</span>
            </div>
        </div>
            <div className="w-full flex flex-col mt-4 ml-2 mr-2 p-4 rounded-[16px] gap-4 bg-black-gradient font-poppins text-white font-medium">
        <div>
            <span>Djemaa Abdelmalek</span>
            <br/>
            <span>Description ...</span>
        </div>
        <img className="w-full max-h-50 rounded-[8px] object-cover" src={school} alt="" />
        <div className="flex items-start gap-6">
            <img className="cursor-pointer" src={twitter} alt="" />
            <img className="cursor-pointer" src={twitter} alt="" />
            <img className="cursor-pointer" src={twitter} alt="" />
        </div>
        <div>
            <span>Comments1</span>
            <br/>
            <span>Comments2</span>
        </div>
    </div>
        </section>

    )
}

export default AnnouncementCard;
