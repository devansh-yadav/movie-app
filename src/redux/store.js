import { configureStore } from '@reduxjs/toolkit';
import moviesDataReducer from './movies/fetchMoviesSlice'

export const store = configureStore({
  reducer: {
    moviesData: moviesDataReducer,
  },
});


