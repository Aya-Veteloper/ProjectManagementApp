import NoProjectImg from "../assets/no-projects.png";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { startAddProject } from "../store/slices/project";

export default function NoProjectSelected() {
  const dispatch = useDispatch();
  const onStartAddProject = () => {
    dispatch(startAddProject());
  };
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImg}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected.
      </h2>
      <p className="text-stone-600 mb-4">
        Select project or get started with new one.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
