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
    changeFilteredCars: (state, { payload }) => {
      const filteredCars = state.cars.filter(car => {
        const match = car.rentalPrice.match(/\$(\d+)/);
        const price = parseInt(match[1], 10);
        if (payload.brand && car.make !== payload.brand) {
          return false;
        }
        if (payload.price && price > payload.price) {
          return false;
        }
        if (
          payload.mileage &&
          (car.mileage < payload.mileage.from ||
            car.mileage > payload.mileage.to)
        ) {
          return false;
        }
        return true;
      });
      state.filteredCars = filteredCars;
      state.isFiltered = true;
    },
    resetArr: state => {
      state.isFiltered = false;
    },
    changePage: (state, { payload }) => {
      state.currentItems += 8;
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

export const {
  addFavorite,
  removeFavorite,
  changeFilteredCars,
  resetArr,
  changePage,
} = carsSlice.actions;
export const persistedCarReducer = persistReducer(persistConfig, carsReducer);
