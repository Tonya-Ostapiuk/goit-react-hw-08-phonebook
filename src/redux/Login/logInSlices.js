import { createSlice } from "@reduxjs/toolkit";
// import { logInInitialState } from "./logInInitialState";
// import { authSelectors } from "./logInSelectos";
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

//   console.log(logInInitialState)


export const logInSlice = createSlice({
name: 'auth',
initialState,
// console.log(initialState),
extraReducers: { 
  [registerUser.fulfilled]:(state, { payload }) =>{
    // console.log(payload)
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [logInUser.fulfilled]:(state, { payload }) =>{
    // console.log(payload)
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [logOut.fulfilled](state) {
    // state.user = { name: null, email: null };
    // state.token = null;
    // state.isLoggedIn = false;
    // state.isRefreshed = false;
    return initialState
    
  },
  [fetchCurrentUser.fulfilled]: (state, {payload}) =>{
    state.user = payload;
    state.isRefreshed = true;
  }

},
});




export const logInReducer = logInSlice.reducer;