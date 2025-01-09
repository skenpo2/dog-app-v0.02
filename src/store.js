import { configureStore } from '@reduxjs/toolkit';

// Import the reducer (default export)
import dogReducer from './feature/dogList/dogSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    dog: dogReducer,
  },
});
