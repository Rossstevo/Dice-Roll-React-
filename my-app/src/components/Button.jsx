import { useState } from "react";

export const Button = () => {



    const [output, setOutput] = useState('');
    return <>

        <button onClick={() => {
            function randomIntFromInterval(min, max) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            const diceResult = randomIntFromInterval(1, 6)
            const diceOutput = "your dice roll is " + diceResult;


            setOutput(diceOutput);
        }}>click me</button>
        <p>{output}</p>
    </>

}