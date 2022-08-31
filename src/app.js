import { Project } from "./projects.js";

const app = (() => {
  let projects = [];
  let inbox = Project("Inbox");
  projects.push(inbox);

  const getProject = (index) => {
    return projects[index];
  };

  const addProject = (proj) => {
    projects.push(proj);
  };

  return {
    getProject,
    addProject,
    get projects() {
      return projects;
    },
  };
})();

export { app };
