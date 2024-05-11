import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { cancelAddProject, addProject } from "../store/slices/project";

export default function NewProject() {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  const dispatch = useDispatch();
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    dispatch(
      addProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      })
    );
  };

  const onCancel = () => {
    dispatch(cancelAddProject());
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Cancel">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          please make sure you provide a valid value to every input feild
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li className="flex justify-between my-4">
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li className="flex justify-between my-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
