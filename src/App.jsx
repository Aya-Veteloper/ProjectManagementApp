import { useSelector } from "react-redux";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  // const handleAddTask = (text) => {
  //   setProjectState((prevState) => {
  //     const taskId = Math.random();
  //     const newTask = {
  //       text: text,
  //       projectId: prevState.selectedProjectId,
  //       id: taskId,
  //     };
  //     return {
  //       ...prevState,
  //       tasks: [...prevState.tasks, newTask],
  //     };
  //   });
  // };

  // const handleDeleteTask = (id) => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       tasks: prevState.tasks.filter((task) => task.id !== id),
  //     };
  //   });
  // };

  // const HandleStartAddProject = () => {
  //   setProjectState((prevProject) => {
  //     return {
  //       ...prevProject,
  //       selectedProjectId: null,
  //     };
  //   });
  // };

  // const HandleCancelAddProject = () => {
  //   setProjectState((prevProject) => {
  //     return {
  //       ...prevProject,
  //       selectedProjectId: undefined,
  //     };
  //   });
  // };

  // const HandleSelectProject = (id) => {
  //   setProjectState((prevProject) => {
  //     return {
  //       ...prevProject,
  //       selectedProjectId: id,
  //     };
  //   });
  // };

  // const handleAddProject = (projectData) => {
  //   setProjectState((prevState) => {
  //     const projectId = Math.random();
  //     const newProject = {
  //       ...projectData,
  //       id: projectId,
  //     };
  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //       projects: [...projectState.projects, newProject],
  //     };
  //   });
  // };

  // const handleDeleteProject = () => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //       projects: prevState.projects.filter((project) => {
  //         project.id !== prevState.selectedProjectId;
  //       }),
  //     };
  //   });
  // };

  const managerState = useSelector((state) => state.project);
  console.log(managerState);

  const selectedProject = managerState.projects.find(
    (project) => project.id === managerState.selectedProjectId
  );
  let content;
  if (managerState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (managerState.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }
  return (
    <main className="h-screen py-8 flex gap-8">
      <ProjectSidebar />
      {content}
      {managerState.selectedProjectId && (
        <SelectedProject project={selectedProject} />
      )}
    </main>
  );
}

export default App;
