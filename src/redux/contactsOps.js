import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66a4a2445dc27a3c190966b1.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
     
export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async (newContacts, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContacts);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)