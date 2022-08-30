import { app } from "./app";

const sidebar = (() => {
  const render = () => {
    const projectsDiv = document.querySelector(".projects");
    app.projects.forEach((proj) => {
      let project = document.createElement("span");
      project.textContent = proj.name;
      projectsDiv.appendChild(project);
    });
  };

  return {
    render,
  };
})();

export { sidebar };
