import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// API endpoint
axios.defaults.baseURL = 'https://650859a456db83a34d9c2d7e.mockapi.io/'

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page, carsPerPage }, { rejectWithValue }) => {
    try {
      const itemsPerPage = carsPerPage; // Кількість елементів на сторінці
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const response = await axios.get(`/cars`);

      const data = response.data.slice(startIndex, endIndex);

      console.log('Data from API:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);