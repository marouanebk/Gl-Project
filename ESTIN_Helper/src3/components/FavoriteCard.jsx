import {people, star} from "../assets/index.js";
import "../index.css"
import React from "react";

function FavoriteCard () {
    return(
        <center>
            <div className="h-[600px] bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 p-4 overflow-x-clip font-poppins text-white font-medium">
                <div className="flex justify-center items-center">
                    <img src={star} className="w-8" alt="Location icon"/>
                    <span className="text-[20px] p-2">Favorites</span>
                </div>
                <div className="overflow-scroll justify-center relative w-full shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 ">
                    <ul>
                        <br/><br/><br/><br/><br/><br/>
                        <li className="flex w-[300px] justify-center bg-black-gradient rounded-xl p-2 m-2 hover:border-2 duration-200">
                            <div className="flex items-center gap-4 p-4">
                                <img className="w-12 h-12 rounded-full"
                                     src={people} alt=""/>
                                <div className="flex flex-col">
                                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Djemaa
                                        Abdelmalek</strong>
                                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Title</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-center bg-black-gradient rounded-xl p-2 m-2 hover:border-2 duration-200">
                            <div className="flex items-center gap-4 p-4">
                                <img className="w-12 h-12 rounded-full"
                                     src={people} alt=""/>
                                <div className="flex flex-col">
                                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Djemaa
                                        Abdelmalek</strong>
                                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Title</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-center bg-black-gradient rounded-xl p-2 m-2 hover:border-2 duration-200">
                            <div className="flex items-center gap-4 p-4">
                                <img className="w-12 h-12 rounded-full"
                                     src={people} alt=""/>
                                <div className="flex flex-col">
                                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Djemaa
                                        Abdelmalek</strong>
                                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Title</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-center bg-black-gradient rounded-xl p-2 m-2 hover:border-2 duration-200">
                            <div className="flex items-center gap-4 p-4">
                                <img className="w-12 h-12 rounded-full"
                                     src={people} alt=""/>
                                <div className="flex flex-col">
                                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Djemaa
                                        Abdelmalek</strong>
                                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Title</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-center bg-black-gradient rounded-xl p-2 m-2 hover:border-2 duration-200">
                            <div className="flex items-center gap-4 p-4">
                                <img className="w-12 h-12 rounded-full"
                                     src={people} alt=""/>
                                <div className="flex flex-col">
                                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Djemaa
                                        Abdelmalek</strong>
                                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Title</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-center bg-black-gradient rounded-xl p-2 m-2 hover:border-2 duration-200">
                            <div className="flex items-center gap-4 p-4">
                                <img className="w-12 h-12 rounded-full"
                                     src={people} alt=""/>
                                <div className="flex flex-col">
                                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Djemaa
                                        Abdelmalek</strong>
                                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Title</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </center>
    )
}

export default FavoriteCard;