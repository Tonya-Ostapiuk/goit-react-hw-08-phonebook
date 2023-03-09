import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const {data} = await axios.post('/user/signup', credentials );
      return data;
    }catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  )