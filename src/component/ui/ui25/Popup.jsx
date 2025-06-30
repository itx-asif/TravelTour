import React from 'react';
import {FcApproval} from "react-icons/fc";
import {BsBackspaceReverseFill} from "react-icons/bs";

function Popup({onClose}) {

    const timer = setTimeout(()=> {
        onClose();
        clearTimeout(timer);
    },5000)

    return (
        <div>
            <div className="fixed top-10 shadow-lg bg-white right-10 border border-green-600 border-2 rounded-lg flex items-center justify-center z-50">
               <>
                   <FcApproval size={65} />
               </>
                <div className="px-3 py-2 max-w-sm w-full">
                    <h2 className="text-xl font-semibold mb-4">Popup Title</h2>
                    <p className="text-gray-700 mb-4">This is the content of the popup.</p>
                </div>
                <BsBackspaceReverseFill
                    className={"absolute animate-ping rotate-90 top-2 right-2 hover:scale-115 hover:text-gray-700"} onClick={onClose} />
                <BsBackspaceReverseFill
                    className={"absolute rotate-90 top-2 right-2 hover:scale-115 hover:text-gray-700"} onClick={onClose} />
            </div>



        </div>
    );
}

export default Popup;