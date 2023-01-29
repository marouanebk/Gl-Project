import React from 'react'
import styles from "../style.js";
import {Footer, Navbar1, SignUpCard} from "../components/index.js";
function SignUp(){
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar1 />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <SignUpCard/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default SignUp