import { useState } from "react";
import Dice from "./Images/Dice.png";

export const DiceApp = () => {

    const [rolls, setRolls] = useState([]);

    const diceStyle = {
        width: '8%',
        cursor: 'pointer',
    }

    return (
        <>
        <img src={Dice} style={diceStyle}



        onClick={() => {
          
            // generate new dice roll 
            const diceResult = randomIntFromInterval(1, 6);
            // add diceResult to the begining of the array
            setRolls([diceResult, ...rolls])
        }}/>
           
        {rolls.map((roll, i) =>
            <p key={i}>1d6: {roll}</p>
        )} 
     </>
    )
}





 // ---> create random number between 1 and 6 
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}