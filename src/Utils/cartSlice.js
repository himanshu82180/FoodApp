import { createSlice } from "@reduxjs/toolkit";
//import { enableMapSet } from 'immer';
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        clearCart:(state)=>{
            state.item=[];
        },
        removeItem:(state,action)=>{
            state.item[action.payload].quantity--;
            if(state.item[action.payload].quantity===0){
                state.item.splice(action.payload,1);
            }
        },
        appendItem:(state,action)=>{
            state.item[action.payload].quantity++;
        },
    }

})
export const {addItem,clearCart,removeItem,appendItem}=cartSlice.actions;
export default cartSlice.reducer;