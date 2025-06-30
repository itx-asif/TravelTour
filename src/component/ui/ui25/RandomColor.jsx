import React,{useState} from 'react';
import Button from "../Button.jsx";


function genratecolor (type) {
    if (!type) {
        return null;
    } else if (type === 'hex') {
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
       hexColor += hex[Math.floor(Math.random() * hex.length)];}
        return hexColor;
    } else if (type === 'rgb') {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        return `rgb(${red},${green},${blue})`;
    }
}
function RandomColor() {
    const [Type, setType] = useState("hex");
    const [color, setColor] = useState("#000000");


    return (
        <div className={'py-8'} style={{width:'100%', height:'100%', backgroundColor:`${color}`}}>
            <div className={"flex justify-center items-center gap-10"}>

                <Button size={'lg'}  onClick={() => {setColor(genratecolor(Type))}}>Generate Color</Button>
                <select className={`bg-orange-600 py-3  px-6 text-amber-50 rounded-lg`} onChange={(e) => {setType(e.target.value);
                  }}>
                    <option value="hex">Hex</option>
                    <option value="rgb">RGB</option>
                </select>

            </div>
            <div className={"flex h-96 justify-center  items-center gap-10"}>
                <h1 className={'font-bold text-4xl '}>{color}</h1>
            </div>
        </div>
    );
}

export default RandomColor;