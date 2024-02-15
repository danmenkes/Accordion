import React, {useCallback, useEffect, useState} from 'react';

const randomUtility = (length:number) => {
    return Math.floor(Math.random() * length)
}

const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState<"hex" | "rgb">("hex")
    const [color, setColor] = useState("#000000")



    const handleClick = useCallback(() => {
       if(typeOfColor === "hex") {

           let hexColor = "#"
           for(let i=0; i<6; i++){
               hexColor +=  hex[randomUtility(hex.length)]
           }
           console.log(hexColor)
           setColor(hexColor)

       }else{
           const r = randomUtility(255)
           const g = randomUtility(255)
           const b = randomUtility(255)
           setColor(`rgb(${r},${g},${b})`)
       }


    },[typeOfColor])

    useEffect(() => {
        handleClick()
    }, [typeOfColor,handleClick]);

    return (
        <div style={{
            width:"100vw",
            height: "400px",
            background: color,

        }}>
            <button onClick={()=> setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={()=> setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick={handleClick}>Generate Random Color</button>
            <div style={{
                display:"flex",
                justifyContent: "center",
                alignItems:"center",
                color:"white",
                fontSize:60,
                marginTop: 30,
                flexDirection:"column",
                gap:1
            }}>
                <h3>{typeOfColor}<br/> {color}</h3>
            </div>
        </div>
    );
};

export default RandomColor;