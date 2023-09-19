import { configureStore } from '@reduxjs/toolkit';
import  carsReducer  from '../redux/cars/carsSlice';
// import { filterReducer } from '../redux/filter/filterSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    // filter: filterReducer,
  },
});