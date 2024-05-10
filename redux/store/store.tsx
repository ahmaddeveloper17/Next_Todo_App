import { configureStore } from "@reduxjs/toolkit";
import list from "../slices/list";
import task from "../slices/task";

const store = configureStore({
  reducer: {
    list: list,
    task: task,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
