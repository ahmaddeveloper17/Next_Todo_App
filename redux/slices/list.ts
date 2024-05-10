import { ListSlice } from "@/app/types/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants/siteUrl";
const initialState: ListSlice = {
  labels: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("list/listdata", async () => {
  try {
    const response = await axios.get(`${URL}/api/todoList`);
    const result = response.data;
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

const list = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.labels = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default list.reducer;
