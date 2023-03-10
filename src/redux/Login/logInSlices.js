import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./LoginOperation";
import { logInUser } from "./LoginOperation";
import { logOut } from "./LoginOperation";
import { fetchCurrentUser } from "./LoginOperation";

const initialState = {
   
    user: { name:null, email:null },
    token:null,
    isLoggedIn:false,
    isRefreshed: false,
  }


export const logInSlice = createSlice({
name: 'auth',
initialState,
extraReducers: { 
  [registerUser.fulfilled]:(state, { payload }) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [logInUser.fulfilled]:(state, { payload }) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [logOut.fulfilled](state) {
    return initialState
    
  },
  [fetchCurrentUser.fulfilled]: (state, {payload}) =>{
    state.user = payload;
    state.isRefreshed = true;
  }

},
});

export const logInReducer = logInSlice.reducer;