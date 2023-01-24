import React from 'react'
import styles from "../style.js";
import {Footer, Navbar1} from "../components/index.js";
import SignInCard from "../components/SignInCard.jsx";
function SignIn (){
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar1 />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <SignInCard/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default SignIn