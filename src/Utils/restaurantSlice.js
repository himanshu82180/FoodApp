import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice=createSlice({
    name:"restaurant",
    initialState:{
        item:[],
    },
    reducers:{
        add:(state,action)=>{
            if(state.item.length===0){
                state.item.push(action.payload);
            }
        },
        clear:(state)=>{
            state.item=[];
        },
    }
})
export const {add,clear}=restaurantSlice.actions;
export default restaurantSlice.reducer;