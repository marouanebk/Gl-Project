import React, { useState, useEffect, useCallback } from 'react'
import styles from "../style.js";
import { AddCard, AnnouncementCard, FavoriteCard, Navbar2, ProfileCard } from "../components/index.js";
import FilterCard from "../components/FilterCard.jsx";
import { close, filter, menu, search , arrowTop } from "../assets";
import { HomeBar } from "../constants/index.js";



import { socialMedia } from "../constants/index.js";
import { add } from "../assets/index.js";


function Home() {
    const [showFilterCard, setShowFilterCard] = useState(false);


    const [showAddCard, setShowAddCard] = useState(false);
    const handleOnClose = () => setShowAddCard(false)
    const handleOnClose2 = () => setShowFilterCard(false)

    const [toggle, setToggle] = useState(false);

    const [records, setRecords] = useState([]);
    const handleChange = (newRecords) => {
        setRecords(newRecords);
    }

    useEffect(() => {
        getRecords();
    }, []);


    const getRecords = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/products/`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const records = await response.json();

        setRecords(records);
    }

    const searchHandler = async (event) => {
        let key = event.target.value;

        if (key) {
            let results = await fetch('http://127.0.0.1:8000/api/annonces/custom/?search=' + key);
            results = await results.json();
            if (results) {
                setRecords(results);
            }
        }
        else {
            getRecords();
        }
    }

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    {/* <Navbar2 /> */}
                    <section>
                        <nav className="w-full flex py-0 justify-between items-center navbar">
                            <h1 className="flex-1 font-poppins font-semi-bold ss:text-[20px] text-[20px] text-white ss:leading-[100.8px] leading-[75px]">
                                ESTIN <span className="text-gradient"> Helper</span>
                            </h1>
                            <div className="hidden sm:flex justify-start items-center min-w-[410px]">
                                <img src={search} className="absolute ml-4 w-8" alt="Search" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" placeholder="Search" onChange={searchHandler} />
                                <button style={{ cursor: "pointer" }} className={``} onClick={() => setShowFilterCard(true)}>
                                    <img src={filter} className="flex ml-4 w-8" alt="Filter" />
                                </button>
                                <FilterCard records={records} handleChange={handleChange} onClose={handleOnClose2} visible={showFilterCard} />
                            </div>
                            <ul className="list-none lg:flex hidden justify-end items-center flex-1">
                                {HomeBar.map((social, index) => (
                                    <img
                                        key={social.id}
                                        src={social.icon}
                                        alt={social.id}
                                        className={`w-[35px] h-[35px] object-contain cursor-pointer ${index !== HomeBar.length - 1 ? "mr-12" : "mr-0"
                                            }`}
                                        onClick={() => window.open(social.link, "_self")}
                                    />
                                ))}
                            </ul>
                            <div className="lg:hidden flex flex-1 justify-end items-center z-50 ">
                                <img
                                    src={toggle ? close : menu}
                                    alt="menu"
                                    className="w-[28px] h-[28px] object-contain"
                                    onClick={() => setToggle(!toggle)}
                                />

                                <div
                                    className={`${!toggle ? "hidden" : "flex"
                                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[65px] rounded-xl sidebar`}
                                >
                                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                                        {HomeBar.map((social, index) => (
                                            <img
                                                key={social.id}
                                                src={social.icon}
                                                alt={social.id}
                                                className={`w-[30px] h-[30px] object-contain cursor-pointer m-2 items-center ${index !== HomeBar.length - 1 ? "mr-2" : "mr-0"
                                                    }`}
                                                onClick={() => window.open(social.link, "_self")}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="sm:hidden flex flex-1 justify-center items-center ">
                            <div className="flex justify-start items-center mb-4 m-0">
                                <img src={search} className="absolute ml-4 w-6" alt="Search icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" placeholder="Search" />
                                <button style={{ cursor: "pointer" }} className={``} onClick={() => setShowFilterCard(true)}>
                                    <img src={filter} className="flex ml-4 w-8" alt="Filter" />
                                </button>
                                <FilterCard onClose={handleOnClose2} visible={showFilterCard} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className={`bg-primary`}>
                <div className="flex justify-between md:flex-row flex-col ">
                    <div className="min-w-[28%]">
                        <ProfileCard />
                    </div>
                    <div className="min-w-[43%]">
                        {records.map((item, index) => (

                            <AnnouncementCard key={index} Annonce={item} images={item.images} />
                        ))}
                    </div>
                    <div className="min-w-[28%]">
                        <FavoriteCard />
                    </div>
                </div>
            </div>
            <div className="fixed z-40 bottom-0 right-0 mr-12 mb-12 " >
                <button style={{ cursor: "pointer" }} className={`${styles.paragraph} items-center`} onClick={() => setShowAddCard(true)}>
                    <img src={add} className="w-16 animate-pulse " alt="Add icon" />
                </button>
            </div>
            <div className="fixed z-40 bottom-0 left-0 ml-12 mb-12 " >
                            <a href="#">
                            <img src={arrowTop} className="w-10 animate-bounce " alt="Add icon" />
                            </a>
            </div>
            <AddCard onClose={handleOnClose} visible={showAddCard} />
            
        </div>
        


    )
}
export default Home