import { useRef } from "react";

function Ref(){
    const user=useRef()
    const number=useRef()

    function handleclick(){
        console.log(user.current.value)
        console.log(number.current.value)

    }
    console.log(user)
    return(
        <div>
            <h1>ENTER DATA BELOW</h1>
            <form >
            <input type="text" placeholder="Enter your name" name="name" ref={user}/>
            <input type="number" placeholder="Enter your number"name="number"   ref={number}/>
            <button type="button" onClick={handleclick}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Ref