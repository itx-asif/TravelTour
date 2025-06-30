import React, {  useEffect, useState } from "react";

const ProgressBar = () => {

    const [Scroll, SetScroll] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop*100 / docHeight);

        SetScroll(scrollPercent);

      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <div className="w-full h-1.5">
      <div className={`bg-orange-600  h-full`} style={{width:`${Scroll}%`}}></div>
    </div>
  );
};

export default ProgressBar;
