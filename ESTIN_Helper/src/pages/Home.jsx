import React, { useState, useEffect , useCallback } from 'react'
import styles from "../style.js";
import { AddCard, AnnouncementCard, FavoriteCard, Navbar2, ProfileCard } from "../components/index.js";
import { facebook } from "../assets/index.js";

function Home() {  
    const [showAddCard, setShowAddCard] = useState(false);
    const handleOnClose = () => setShowAddCard(false)

    const [records, setRecords] = useState([]);
    // const [search, setsearch] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        getRecords();
    }, []);

    // useEffect((search) => {
    //     console.log("new value for search");
    // })


    const getRecords = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/products/`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const records = await response.json();

        setRecords(records);
        // console.log(records);
    }




    const searchHandler = useCallback(async (event) => {
        console.log("in seaaaaaaaaaaaaarch ");

        console.warn(event.target.value);
        let key = event.target.value;
        console.log(key);


        if (key) {
            let results = await fetch(`http://127.0.0.1:8000/api/products/?search=${key}`);
            results = await results.json();
            if (results) {
                setRecords(results);
            }
        }
        else {
            getRecords();
        }
    }, []);

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar2
                        onChange={searchHandler} />
                </div>
            </div>
            <div className={`bg-primary`}>
                <div className="flex flex-wrap sm:flex justify-between ">
                    <div className="min-w-[25%]">
                        <ProfileCard />
                    </div>
                    <div className="min-w-[43%]">

                        {records.map((item, index) => (

                            <AnnouncementCard />
                        ))}
                    </div>

                    <div className="min-w-[25%]">
                        <FavoriteCard />
                    </div>
                </div>
            </div>
            <div className="fixed z-40 bottom-0 right-0 mr-12 mb-12 " >
                <button style={{ cursor: "pointer" }} className={`${styles.paragraph} items-center`} onClick={() => setShowAddCard(true)}>
                    <img src={facebook} className="w-16 animate-pulse " alt="Add icon" />
                </button>
            </div>
            <AddCard onClose={handleOnClose} visible={showAddCard} />
        </div>
    )
}
export default Home