import { useState, useMemo } from "react";


function Count(){
const [count,setcount] = useState(0);

useMemo(()=>{
    console.log('Count Changed')
},[count])

function increment(){
    setcount(count+1)
}
function decrement(){
    setcount(count-1)
}

console.log('component rendered')

return(

    <div >
        <h1>{count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Increase</button>
    </div>
)
}

export default Count