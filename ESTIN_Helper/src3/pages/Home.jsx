import React, {useState} from 'react'
import styles from "../style.js";
import {AddCard, AnnouncementCard, FavoriteCard, Footer, Navbar2, ProfileCard} from "../components/index.js";
import {add} from "../assets/index.js";

function Home (){
    const [showAddCard, setShowAddCard] = useState(false);
    const handleOnClose = ()=>setShowAddCard(false)
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar2 />
                </div>
            </div>
            <div className={`bg-primary`}>
                    <div className="flex justify-between md:flex-row flex-col ">
                        <div className="min-w-[28%]">
                            <ProfileCard/>
                        </div>
                        <div className="min-w-[43%]">
                            <AnnouncementCard/>
                        </div>
                        <div className="min-w-[28%]">
                            <FavoriteCard/>
                        </div>
                    </div>
                <div className="px-8">
                    <Footer/>
                </div>
            </div>
            <div className="fixed z-40 bottom-0 right-0 mr-12 mb-12 " >
                <button style={{ cursor:"pointer" }} className={`${styles.paragraph} items-center`} onClick={()=>setShowAddCard(true)}>
                    <img src={add} className="w-16 animate-pulse " alt="Add icon"/>
                </button>
            </div>
            <AddCard onClose={handleOnClose} visible={showAddCard}/>
        </div>
)
}
export default Home