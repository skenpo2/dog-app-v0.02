import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
  import.meta.env.VITE_API_KEY
}`;

const initialState = {
  dogList: [],
  isLoading: true,
};

export const getDogList = createAsyncThunk(
  'dog/getDogList',
  async (dog, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
const dogSlice = createSlice({
  name: 'dog',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getDogList.isLoading, (state) => {
        state.isLoading = true;
      })
      .addCase(getDogList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dogList = action.payload;
      })
      .addCase(getDogList.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export default dogSlice.reducer;
