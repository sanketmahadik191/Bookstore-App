import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name:'auth',
    initialState:{
        user:JSON.parse(localStorage.getItem("Users"))|| null,
        book:{}
    },

    reducers:{
        login :(state,action)=>{
            state.user = action.payload;
            localStorage.setItem("Users",JSON.stringify(action.payload));
        },
        logout:(state)=>{
            state.user = null;
            localStorage.removeItem("Users");
        },
        bookData:(state,action)=>{
            state.book = action.payload;
        }
    },
});

export const { login , logout ,bookData} = authSlice.actions;

export default authSlice.reducer;