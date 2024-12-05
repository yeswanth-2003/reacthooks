import { createSlice ,configureStore} from '@reduxjs/toolkit';


const Counter=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        }
    }
})

export const {increment,decrement}=Counter.actions;


const count = configureStore({
    reducer: {
      counter: Counter.reducer,
    },
  });
  
  
  
  
  
  export default count;