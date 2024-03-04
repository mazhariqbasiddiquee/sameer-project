import { configureStore } from '@reduxjs/toolkit';
import pincodeReducer from '../features/pincodeSlice';

const store = configureStore({
  reducer: {
    pincode: pincodeReducer,
  },
});

export default store;
