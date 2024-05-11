import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  },
  reducers: {
    getTasks: (state) => {
      state.tasks = state.tasks.filter(
        (task) => task.projectId === state.selectedProjectId
      );
    },
    AddTask: (state, action) => {
      const { text } = action.payload;
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: state.selectedProjectId,
        id: taskId,
      };

      state.tasks = [...state.tasks, newTask];
    },
    DeleteTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = prevState.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { AddTask, DeleteTask } = taskSlice.actions;

export default taskSlice.reducer;
