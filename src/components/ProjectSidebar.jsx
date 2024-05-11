import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { startAddProject, selectProject } from "../store/slices/project";

export default function ProjectSidebar() {
  const dispatch = useDispatch();

  const managerState = useSelector((state) => state.project);
  console.log(managerState);

  const onStartAddProject = () => {
    dispatch(startAddProject());
  };

  const onSelectProject = (id) => {
    console.log(`before ${id}`);
    dispatch(selectProject({ projectId: id }));
    console.log(`after ${id}`);
  };
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div className="mt-24 text-center w-2/3">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="p-4 mt-8 rounded-md">
        {managerState.projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === managerState.selectedProjectId) {
            cssClasses += " text-stone-200 bg-stone-800";
          } else {
            cssClasses += " text-stone-600";
          }
          return (
            <li key={project.id} className="flex justify-between my-4">
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
