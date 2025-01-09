import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dogList: [],
  isLoading: true,
};

const dogSlice = createSlice({
  name: 'dog',
  initialState,
});

export default dogSlice.reducer;
