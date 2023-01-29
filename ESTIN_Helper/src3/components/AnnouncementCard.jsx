import React, {useState} from 'react'
import {chat, favorite, people} from "../assets/index.js";
import {data} from "../constants/index.js";
import {Link} from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {FullscreenControl, Marker, NavigationControl} from "react-map-gl";

const AnnouncementCard = () => {
    const [lng] = useState( 6.642433);
    const [lat] = useState(36.360155);
    const [showMore, setShowMore] = useState(false);
    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 550;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 550;
    };
    return (
        <section className="h-[650px] bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 overflow-x-clip font-poppins text-white font-medium">
            <div className="overflow-scroll justify-center relative w-full shadow-lg ring-1 flex-col ring-black/5 rounded-xl flex items-center gap-6 ">
                <div className="bg-black-gradient rounded-2xl flex flex-col relative gap-4 m-2 p-6 overflow-x-clip font-poppins text-white font-medium border-2">
                    <div className="sm:flex justify-between items-center">
                        <img className="w-8 rounded-full absolute " src={people} alt="" />
                        <span className="pl-10 text-[16px]">abdelmalek djemaa</span>
                        <div className="flex items-start gap-6 ml-7">
                            <Link className="cursor-pointer" to={'/Sign-in'}>
                                <img src={chat} className="w-6" alt="chat icon"/>
                            </Link>
                            <Link className="cursor-pointer" to={'/Sign-in'}>
                                <img src={favorite} className="w-6" alt="favorite icon"/>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-6 m-2">
                        {showMore ? <div className="justify-center">
                                <div>
                                    <span>Djemaa Abdelmalek</span>
                                    <br/>
                                    <span>Description</span>
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
                                        zoom:11,
                                    }}
                                    mapStyle="mapbox://styles/mapbox/streets-v9"
                                >
                                    <Marker longitude={lng} latitude={lat} />
                                    <NavigationControl position="bottom-right" />
                                    <FullscreenControl />
                                </Map>
                            </div> :
                            <div>
                                <span>Djemaa Abdelmalek</span>
                                <br/>
                            </div> }
                        <button className="flex justify-start text-gradient hover:text-[17px] duration-150" onClick={() =>setShowMore(!showMore)}>
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
                            {data.map((item) => (
                                <img
                                    className='rounded-[16px] w-full  h-full inline-block pr-2 pl-2 cursor-pointer'
                                    src={item.img}
                                    alt='/'
                                />
                            ))}
                        </div>
                        <button className='opacity-50 cursor-pointer hover:opacity-100 text-3xl' onClick={slideRight}>
                            {'>'}
                        </button>
                    </div>
                </div>
                <div className="bg-black-gradient rounded-2xl flex flex-col relative gap-4 m-2 p-6 overflow-x-clip font-poppins text-white font-medium border-2">
                    <div className="sm:flex justify-between items-center">
                        <img className="w-8 rounded-full absolute " src={people} alt="" />
                        <span className="pl-10 text-[16px]">abdelmalek djemaa</span>
                        <div className="flex items-start gap-6 ml-7">
                            <Link className="cursor-pointer" to={'/Sign-in'}>
                                <img src={chat} className="w-6" alt="chat icon"/>
                            </Link>
                            <Link className="cursor-pointer" to={'/Sign-in'}>
                                <img src={favorite} className="w-6" alt="favorite icon"/>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-6 m-2">
                        {showMore ? <div className="justify-center">
                                <div>
                                    <span>Djemaa Abdelmalek</span>
                                    <br/>
                                    <span>Description</span>
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
                                        zoom:11,
                                    }}
                                    mapStyle="mapbox://styles/mapbox/streets-v9"
                                >
                                    <Marker longitude={lng} latitude={lat} />
                                    <NavigationControl position="bottom-right" />
                                    <FullscreenControl />
                                </Map>
                            </div> :
                            <div>
                                <span>Djemaa Abdelmalek</span>
                                <br/>
                            </div> }
                        <button className="flex justify-start text-gradient hover:text-[17px] duration-150" onClick={() =>setShowMore(!showMore)}>
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
                            {data.map((item) => (
                                <img
                                    className='rounded-[16px] w-full  h-full inline-block pr-2 pl-2 cursor-pointer'
                                    src={item.img}
                                    alt='/'
                                />
                            ))}
                        </div>
                        <button className='opacity-50 cursor-pointer hover:opacity-100 text-3xl' onClick={slideRight}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnnouncementCard;
