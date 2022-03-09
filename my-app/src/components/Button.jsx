import { useState } from "react";

let array = [];

export const Button = () => {

    const [output, setOutput] = useState('');
    return <>
        <button onClick={() => {
          

            // generate new dice roll 
            const diceResult = randomIntFromInterval(1, 6);
            // add new dice roll to the array 
            array.push(diceResult);
            console.log(array);
            // send dice result 
            setOutput(diceResult);
            
        }}>
            Roll 1d6
        </button>
        {/* <p>{output}</p> */}
        <Output output={output}/>
    </>
}


const Output = ({output}) => {
    return <>
        <h2>Results:</h2>
        
        <p>1d6 : {output}</p>
        </>
}




 // ---> create random number between 1 and 6 
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}