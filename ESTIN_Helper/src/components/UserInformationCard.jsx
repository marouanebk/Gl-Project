import "../index.css"
import React from "react";

function UserInformationCard ({visible , onClose}) {
    if (!visible) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 m-4">
            <div className="bg-black-gradient border-solid border-2 rounded-[20px] w-[50%] h-[70%] p-4 font-poppins text-primary font-medium te">
                <button onClick={onClose} className="right-0 text-white text-[20px]">X</button>
           </div>
        </div>

    )

}

export default UserInformationCard;
