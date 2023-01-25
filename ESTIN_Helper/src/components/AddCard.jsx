import "../index.css"
import React from "react";

function AddCard ({visible , onClose}) {
    if (!visible) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 m-4">
            <div className="bg-black-gradient rounded-[20px] w-[750px] h-[450px]">
                <button onClick={onClose} className="top-0 right-2 text-white text-[20px] ml-3 mt-2">X</button>
            </div>
        </div>

    )

}

export default AddCard;
