import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: 0,
  status: "idle",
};

// https://redux-toolkit.js.org/api/createAsyncThunk
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "Counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // value here is what links back to the value in initialState
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Payload is a value passed in by the user
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.value; // selectCount
export const selectFetchStatus = (state) => state.counter.status; // Export to allow users to see state data on the FE
export default counterSlice.reducer;
