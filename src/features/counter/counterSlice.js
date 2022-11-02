import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:5
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        baran:(state)=>{
            state.count+=1;
        },
        koman:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count = 0
        },
        incrementAmountBy:(state,action)=>{
            state.count += action.payload
        },
        decrementAmountBy:(state,action)=>{
            state.count-=action.payload
        }

    }
})
console.log(counterSlice)
console.log(counterSlice.getInitialState)

export const {koman,baran,reset,incrementAmountBy,decrementAmountBy} = counterSlice.actions;
export default counterSlice.reducer;