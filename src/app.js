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

  const getProjectIndexOfNote = (note) => {
    for (let i = 1; i < projects.length; ++i) {
      if (projects[i].notes.some((element) => element === note)) return i;
    }
  };

  return {
    getProject,
    addProject,
    getProjectIndexOfNote,
    get projects() {
      return projects;
    },
  };
})();

export { app };
