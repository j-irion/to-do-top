import { Project } from "./projects.js";

const app = (() => {
  let projects = [];
  let inbox = Project("Inbox");
  projects.push(inbox);

  const getProject = (proj) => {
    return projects[proj];
  };

  return {
    getProject,
  };
})();

export { app };
