import { app } from "./app";

const sidebar = (() => {
  const render = () => {
    const projectsDiv = document.querySelector(".projects");
    app.projects.forEach((proj) => {
      let project = document.createElement("span");
      project.textContent = proj.name;
      projectsDiv.appendChild(project);
    });
    let plus = document.createElement("div");
    plus.id = "btn-add-project";
    plus.textContent = "+";
    projectsDiv.appendChild(plus);
  };

  return {
    render,
  };
})();

export { sidebar };
