import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// API endpoint
axios.defaults.baseURL = 'https://650859a456db83a34d9c2d7e.mockapi.io/'

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/cars`);
      console.log('Data from API:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);