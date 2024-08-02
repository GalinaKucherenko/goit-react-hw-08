import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
    'auth/register',
    async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser);
        axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
     
export const logIn = createAsyncThunk(
    'auth/logIn',
    async (creds, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', creds);
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            axios.defaults.headers.common.Authorization = "";
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        setAuthHeader(reduxState.auth.token);
        
        try {
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState;
            return reduxState.auth.token !== null;
        },
    }
);