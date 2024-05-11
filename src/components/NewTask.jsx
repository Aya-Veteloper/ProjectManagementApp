import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../store/slices/project";

export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    setEnteredTask(" ");
    dispatch(AddTask({ text: enteredTask }));
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-red-500"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
