import React, {useState} from 'react'
import styles from "../style.js";
import {AddCard, Navbar2} from "../components/index.js";
import {facebook} from "../assets/index.js";

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
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} bg-blend-color`}>
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