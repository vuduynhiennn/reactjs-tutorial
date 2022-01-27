import { configureStore } from '@reduxjs/toolkit';
import carReducer from "..features/car/careSlice";
export const store = configureStore({
  reducer: {
    car: carReducer
  },
});