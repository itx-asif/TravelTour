import React from 'react';

function Banner({content}) {
    return (
        <div
            className="h-[400px] text-white flex items-center justify-center text-center"
            style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${content.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}

        >
            <div className="">
                <h1 className="text-4xl font-bold">{content.heading}</h1>
                <p className="text-lg mt-2">{content.slogan}</p>
            </div>
        </div>
    );
}

export default Banner;