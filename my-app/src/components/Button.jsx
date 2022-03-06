export const Button = () => {
    console.log("working");
    return <button onClick={() => {
        const name = "James";
        console.log("hello, ", name);
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const rndInt = randomIntFromInterval(1, 6)
        console.log(rndInt)







    }}>click me</button>


}