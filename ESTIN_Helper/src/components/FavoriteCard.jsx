import { people, star } from "../assets/index.js";
import React, { useState, useEffect, useCallback } from 'react'
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";



import "../index.css"

function FavoriteCard({ handleChange, handleIdChange }) {
    let { user } = useContext(AuthContext)

    const [favorites, setfavorites] = useState([]);

    useEffect(() => {
        getFavorites();
    }, []);


    const getFavorites = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/favorites/${user.user_id}/`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const favorites = await response.json();



        setfavorites(favorites);
    }

    async function getAnnonceByid(id) {
        const response = await fetch(`http://127.0.0.1:8000/api/annonces/detail/${id}/`);

        console.log(`IN GET BY ${id} `)
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const item = await response.json();
        console.log("item.images");
        console.log(item.images);


        // const array = [item];
        // console.log("length");
        // console.log(item.images.length);
        // for (let i = 0; i < item.images.length; i++) {
        //     array.images[i].image = "http://127.0.0.1:8000"+array.images[i].image;
        //     console.log("modifying");
        //     console.log(array.images[i].image);
        // } 
        // console.log(item.images);
        // console.log("array");

        const array = [item];
        // handleIdChange(item.id);

        handleChange(array);
    }



    return (
        <center>
            <div className="h-[600px] bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 p-4 overflow-x-clip font-poppins text-white font-medium">
                <div className="flex justify-center items-center">
                    <img src={star} className="w-8" alt="Location icon" />
                    <span className="text-[20px] p-2">Favorites</span>
                    {/* shadow-lg ring-1 ring-black/5 rounded-xl */}
                </div>
                <div className="overflow-scroll justify-center relative w-full  flex items-center gap-6 ">
                    <ul>

                        {favorites.map((item, index) => (

                            <div onClick={() => getAnnonceByid(item.annonce.id)} >  <SmallFavorite key={index} first_name={item.annonce.user_info.first_name} last_name={item.annonce.user_info.last_name} title={item.annonce.title} />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </center>
    )
}

function SmallFavorite({ title , first_name , last_name }) {

    return <li className="flex justify-center bg-black-gradient rounded-xl p-2 m-2 hover:border-2 duration-200">
        <div className="flex items-center gap-4 p-4">
            <img className="w-12 h-12 rounded-full"
                src={people} alt="" />
            <div className="flex flex-col">
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200"> {first_name} {last_name}</strong>
                <span className="text-slate-500 text-sm font-medium dark:text-slate-400">{title}</span>
            </div>
        </div>
    </li>
}

export default FavoriteCard;