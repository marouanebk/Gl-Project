import React, { useState, useEffect } from 'react'
import { chat, favorite, people } from "../assets/index.js";
import { data } from "../constants/index.js";
import { Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { FullscreenControl, Marker, NavigationControl } from "react-map-gl";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";
import axios from 'redaxios';



const AnnouncementCard = ({ Annonce, images }) => {
    let { user } = useContext(AuthContext)
    let profile_pic = "http://127.0.0.1:8000"+user.profile_picture

    const [lng] = useState(6.642433);
    const [lat] = useState(36.360155);
    const [showMore, setShowMore] = useState(false);

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 550;
    };

    let dataString = Annonce.created;
    const date = new Date(dataString);
    const formattedDate = date.toLocaleDateString();

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 550;
    };
    async function addFavorite(event) {
        // event.preventDefault();
        var formData = new FormData();
        formData.append('user', user.user_id);
        formData.append('annonce', Annonce.id);
        const response = await axios.post('http://127.0.0.1:8000/api/favorites/', formData);
    }




    return (
        <section >
            <div className="bg-black-gradient rounded-2xl flex flex-col relative gap-4 m-2 p-6 overflow-x-clip font-poppins text-white font-medium">
                <div className="sm:flex justify-between items-center">
                    <img className="w-8 rounded-full absolute " src={"http://127.0.0.1:8000"+Annonce.user_info.profile_picture} alt="" />
                    <span className="pl-10 text-[16px]">{Annonce.user_info.first_name} {Annonce.user_info.last_name}</span>
                    <div className="flex items-start gap-6 ml-7">
                        <span className="pl-4 mt-1 text-[10px]">{formattedDate}</span>

                        <Link className="cursor-pointer" to={'/Sign-in'}>
                            <img src={chat} className="w-6" alt="chat icon" />
                        </Link>
                        <Link className="cursor-pointer" to={'/Sign-in'}>
                            <img onClick={addFavorite} src={favorite} className="w-6" alt="favorite icon" />
                        </Link>
                    </div>
                </div>
                <div className="mx-6 m-2">
                    {showMore ? <div className="justify-center">
                        <div >
                            <span className='text-gradient'>title : {Annonce.title}</span>
                            <br />
                            <span className='text-gradient'>Description :{Annonce.description}</span>                    <br />
                            <span className='text-gradient'>category :{Annonce.category}</span>                    <br />
                            <span className='text-gradient'>theme :{Annonce.theme}</span>                    <br />
                            <span className='text-gradient'>modality :
                                {Annonce.modality}</span><br />
                            <span className='text-gradient'>sold :{Annonce.sold}</span><br />
                            <span className='text-gradient'>wilaya :{Annonce.wilaya}</span><br />
                            <span className='text-gradient'>commune :{Annonce.commune}</span>

                        </div>
                        <Map
                            mapboxAccessToken="pk.eyJ1IjoibWFsZWs1IiwiYSI6ImNsZGY3cmk1dzAycTE0MG1paG9yYXBvNjMifQ.pyx1m6eB3ui9Oc2V09pfJA"
                            style={{
                                width: "full",
                                height: "150px",
                                borderRadius: "15px",
                                border: "2px solid black",
                            }}
                            initialViewState={{
                                longitude: lng,
                                latitude: lat,
                                zoom: 11,
                            }}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                        >
                            <Marker longitude={lng} latitude={lat} />
                            <NavigationControl position="bottom-right" />
                            <FullscreenControl />
                        </Map>
                    </div> :
                        <div >
                            <span>title : {Annonce.title}</span>
                            <br />
                            <span>Description :{Annonce.description}</span>


                        </div>
                    }
                    <button className="flex justify-start text-gradient hover:text-[17px] duration-150" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show less " : "Show More ..."}
                    </button>
                </div>
                <div className='relative flex items-center'>
                    <button className='opacity-50 cursor-pointer hover:opacity-100 text-3xl' onClick={slideLeft}>
                        {'<'}
                    </button>
                    <div
                        id='slider'
                        className='w-full h-full rounded-[16px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {images.map((item, index) => (

                            <img key={index}
                                className='rounded-[16px] w-full  h-full inline-block pr-2 pl-2 cursor-pointer'
                                src={item.image}
                                alt='/'
                            />
                        ))}
                    </div>
                    <button className='opacity-50 cursor-pointer hover:opacity-100 text-3xl' onClick={slideRight}>
                        {'>'}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AnnouncementCard;



{/* <div className="ml-7">
    <span>title : {Annonce.title}</span>
    <br />
    <span>Description :{Annonce.description}</span>                    <br />
    <span>category :{Annonce.category}</span>                    <br />
    <span>theme :{Annonce.theme}</span>                    <br />
    <span>modality :
        {Annonce.modality}</span><br />
    <span>sold :{Annonce.sold}</span><br />
    <span>wilaya :{Annonce.wilaya}</span><br />
    <span>commune :{Annonce.commune}</span>

</div> */}