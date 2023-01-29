import React from 'react'
import styles from "../style.js";
import {
    AnnouncementCard,
    ContactCard,
    FavoriteCard,
    Navbar2,
    ProfileInfoCard
} from "../components/index.js";

function User (){
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
                            <FavoriteCard/>
                        </div>
                        <div className="min-w-[43%]">
                            <ProfileInfoCard/>
                            <AnnouncementCard/>
                        </div>
                        <div className="min-w-[28%]">
                            <ContactCard/>
                        </div>
                    </div>
            </div>
        </div>
)
}
export default User