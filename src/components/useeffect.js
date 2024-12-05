import { useState, useEffect } from "react";


function Time(){
const [count,setcount] = useState(0);

useEffect(()=>{
    console.log('Count Changed')
},[count])

function increment(){
    setcount(count+1)
}

console.log('component rendered')

return(

    <div >
        <h1>COUNT : {count}</h1>
        <button onClick={increment}>Increase</button>
    </div>
)
}

export default Time