import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './redux';


function Dispatch() {
    const count = useSelector((state) => state.counter.value);
  
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    );
  }
  
  export default Dispatch;

