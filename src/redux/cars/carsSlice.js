import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { fetchCars } from './carsOperations';


const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteCars = [payload, ...state.favoriteCars];
    },
    removeFavorite: (state, { payload }) => {
      const index = state.favoriteCars.findIndex(car => car.id === payload);
      state.favoriteCars.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addMatcher(isAnyOf(fetchCars.pending), handlePending)
      .addMatcher(isAnyOf(fetchCars.rejected), handleRejected)
      .addMatcher(isAnyOf(fetchCars.fulfilled), handleFulfilled);
  },
});

const carsReducer = carsSlice.reducer;
const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteCars'],
};

export const { addFavorite, removeFavorite } = carsSlice.actions;
export const persistedCarReducer = persistReducer(persistConfig, carsReducer);
