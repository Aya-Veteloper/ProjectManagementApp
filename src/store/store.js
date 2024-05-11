import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "./slices/project";
import TaskReducer from "./slices/task";

const store = configureStore({
  reducer: {
    project: ProjectReducer,
    task: TaskReducer,
  },
});

export default store;
