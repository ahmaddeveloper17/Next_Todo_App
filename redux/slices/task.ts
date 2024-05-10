import { TaskSlice } from "@/app/types/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants/siteUrl";
const initialState: TaskSlice = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchtask = createAsyncThunk("task/taskdata", async () => {
  try {
    const response = await axios.get(`${URL}/api/homeTask`);
    const result = response.data;
    return result;
  } catch (error) {}
});

const task = createSlice({
  name: "task",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchtask.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchtask.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchtask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default task.reducer;
