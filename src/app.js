import { Project } from "./projects.js";

const App = function () {
  let projects = [];
  let inbox = Project("Inbox");
  projects.push(inbox);

  const getProject = (proj) => {
    return projects[proj];
  };

  return {
    getProject,
  };
};

export { App };
