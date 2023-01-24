import React from 'react'
import styles from "../style.js";
import {Creators, Footer, Navbar, Start, What} from "../components/index.js";
function Splash (){
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Start />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <What />
                    <Creators/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Splash