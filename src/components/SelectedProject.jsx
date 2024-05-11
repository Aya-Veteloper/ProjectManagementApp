import React from "react";
import Tasks from "./Tasks";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../store/slices/project";

export default function SelectedProject({ project }) {
  const dispatch = useDispatch();
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const managerState = useSelector((state) => {
    state.project.tasks;
  });
  console.log(managerState)
  

  const onDelete = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => onDelete(project.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
