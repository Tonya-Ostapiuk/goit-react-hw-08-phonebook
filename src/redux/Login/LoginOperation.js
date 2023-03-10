import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const logInUser = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        console.log(data)
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
      
        return thunkAPI.rejectWithValue();
      }
  
      token.set(persistedToken);
      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );

