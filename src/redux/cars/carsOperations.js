import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// API endpoint
axios.defaults.baseURL = 'https://650859a456db83a34d9c2d7e.mockapi.io/';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
