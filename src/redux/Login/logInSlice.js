import { createSlice } from "@reduxjs/toolkit";
import { logInInitialState } from "./logInInitialState";

export const logInSlice = createSlice({
name: 'auth',
initialState,
extraReducers: {},
});




export const logInReducer = logInSlice.reducer;

