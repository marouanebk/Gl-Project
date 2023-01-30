import React from 'react'
import styles from "../style.js";
import {Footer, ResetCard, Navbar1} from "../components/index.js";

function ResetPassword (){
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar1 />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <ResetCard/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default ResetPassword