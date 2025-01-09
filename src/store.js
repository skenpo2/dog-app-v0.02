import { configureStore } from '@reduxjs/toolkit';

import { dogReducer } from './feature/dogList/dogSlice';

export const store = configureStore({
  reducer: {
    dog: dogReducer,
  },
});
