// pincodeSlice.js
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPincodeDetails = createAsyncThunk(
  'pincode/fetchPincodeDetails',
  async (pincode, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      // return response.data[0].PostOffice;
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const pincodeSlice = createSlice({
  name: 'pincode',
  initialState: {
    pincodeDetails: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetState: state => {
      state.pincodeDetails = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPincodeDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPincodeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.pincodeDetails = action.payload;
      })
      .addCase(fetchPincodeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = pincodeSlice.actions;
export default pincodeSlice.reducer;
