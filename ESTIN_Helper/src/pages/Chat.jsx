import React from 'react'
import styles from "../style.js";
import {ContactCard, Messages, Navbar3} from "../components/index.js";
function Chat (){
    return (
        <div className="bg-primary w-full overflow-hidden">
                <div>
                    <Navbar3 />
                </div>
            <div className={`bg-primary`}>
                <div className="flex justify-between md:flex-row flex-col ">
                    <div className="min-w-[60%]">
                        <Messages/>
                    </div>
                    <div className="min-w-[35%]">
                        <ContactCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chat