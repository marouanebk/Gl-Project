import React, {useState} from 'react'
import styles from "../style.js";
import {AddCard, Navbar2} from "../components/index.js";
import {facebook} from "../assets/index.js";
import { useContext } from 'react';
import AuthContext from '../context/AuthContext.jsx';

function Home (){
    let {user, logoutUser} = useContext(AuthContext)
    const [showAddCard, setShowAddCard] = useState(false);
    const handleOnClose = ()=>setShowAddCard(false)
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar2 />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} bg-blend-color`}>
                    {user && 
                    <h1 className="font-poppins font-semi-bold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Welcome to Your account {user.username}.
                    <input onClick={logoutUser} style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[14px]  pt-4 pb-4 pl-8 pr-8 mb-0 font-poppins text-primary font-medium cursor-pointer text-[30px] items-start bg-blue-gradient rounded-[30px]`} placeholder='Log out' type=''/>
                    
                  </h1>
                    }
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>
                    Hello <br/>

                </div>
            </div>
            <div className="fixed z-40 bottom-0 right-0 mr-12 mb-12 " >
                <button style={{ cursor:"pointer" }} className={`${styles.paragraph} items-center`} onClick={()=>setShowAddCard(true)}>
                    <img src={facebook} className="w-16 animate-pulse " alt="Add icon"/>
                </button>
            </div>
            <AddCard onClose={handleOnClose} visible={showAddCard}/>
        </div>
)
}
export default Home