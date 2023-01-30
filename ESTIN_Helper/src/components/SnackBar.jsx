import "../index.css"
import React from "react";

function Snackbar({ visible, onClose, message, color }) {
  if (!visible) return null;
  return (
    <div
      className="z-50 right-8 bottom-8 absolute mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-gray-50 shadow-lg p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap animate-bounce">
      <div className={`inline-flex items-center text-${color}-700`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20"
          fill="currentColor">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          />
        </svg>
        {message}
      </div>
      <div className="text-green-700 cursor-pointer hover:text-green-800">
        <span
          className={`ml-2 flex-shrink-0 inline-flex item-center justify-center border-l-2 border-t-2 border-${color}-700 p-1 leading-none rounded-full`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" onClick={onClose}>
            <path
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            />
          </svg>
        </span>
      </div>
    </div>

  )

}

export default Snackbar;
