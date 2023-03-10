// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };


// export const register = createAsyncThunk(

//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const {data} = await axios.post('/user/signup', credentials );
//       // console.log(data)
//       token.set(data.token);
//       return data;
      
//     }catch (e){
//       return  thunkAPI.rejectWithValue(e.message);
//     }
//   }
//   ) 
//   console.log(register)
  