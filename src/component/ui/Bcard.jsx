import React from 'react';

function Bcard(props) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div>
    <img src={props.icon} alt="icon" className="w-16 h-16 mb-4" />
            </div>
            <div>
                <h2 className="">{props.title}</h2>
                <p className="">{props.description}</p>
            </div>
        </div>
    );
}

export default Bcard;