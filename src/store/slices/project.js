import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  },
  reducers: {
    getProjects: (state) => {
      state.projects;
    },
    startAddProject: (state, action) => {
      state.selectedProjectId = null;
    },
    cancelAddProject: (state, action) => {
      state.selectedProjectId = undefined;
    },
    selectProject: (state, action) => {
      const { projectId } = action.payload;
      state.selectedProjectId = projectId;
    },

    addProject: (state, action) => {
      const { title, description, dueDate } = action.payload;
      const projectId = Math.random();
      const newProject = {
        title: title,
        description: description,
        dueDate: dueDate,
        id: projectId,
      };
      state.projects = [...state.projects, newProject];
    },

    deleteProject: (state, action) => {
      const { id } = action.payload;
      state.selectedProjectId = undefined;
      state.projects = state.projects.filter((project) => project.id !== id); // corrected line
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
      const { taskId } = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const {
  getProjects,
  startAddProject,
  cancelAddProject,
  selectProject,
  addProject,
  deleteProject,
  AddTask,
  DeleteTask,
} = projectSlice.actions;

export default projectSlice.reducer;
