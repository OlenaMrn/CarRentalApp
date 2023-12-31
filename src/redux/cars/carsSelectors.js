import { createSelector } from '@reduxjs/toolkit';

export const carsSelector = state => state.cars.cars;
export const favoriteSelector = state => state.cars.favoriteCars;
export const currentItemsSelector = (state) => state.cars.currentItems;

export const isLoadingSelector = createSelector(
  state => state.cars.isLoading,
  isLoading => isLoading
);
