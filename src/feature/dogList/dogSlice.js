import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the API endpoint
const url = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
  import.meta.env.VITE_API_KEY
}`;

// Initial state
const initialState = {
  dogList: [],
  isLoading: true,
};

// Async thunk for fetching dog images
export const getDogList = createAsyncThunk(
  'dog/getDogList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

// Create a slice
const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDogList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDogList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dogList = action.payload;
      })
      .addCase(getDogList.rejected, (state, action) => {
        console.log(action.payload); // Log the error message
        state.isLoading = false;
      });
  },
});

export default dogSlice.reducer;
