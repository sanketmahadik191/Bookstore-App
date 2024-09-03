import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name:'auth',
    initialState:{
        user:"",
        book:{}
    },

    reducers:{
        login :(state,action)=>{
            const { user, token } = action.payload;
            state.user = user,
            localStorage.setItem("token",token);
        },
        logout:(state)=>{
            state.user = null;
            localStorage.removeItem("token");
        },
        bookData:(state,action)=>{
            state.book = action.payload;
        }
    },
});

export const { login , logout ,bookData} = authSlice.actions;

export default authSlice.reducer;