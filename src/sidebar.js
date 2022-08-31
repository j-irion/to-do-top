import { app } from "./app";
import { displayProjectCreator } from "./modal";

const sidebar = (() => {
  const render = () => {
    const projectsList = document.querySelector(".projects");
    app.projects.forEach((proj) => {
      let project = document.createElement("li");
      project.textContent = proj.name;
      project.className = "project";
      projectsList.appendChild(project);
    });
    let plus = document.createElement("div");
    plus.id = "btn-add-project";
    plus.textContent = "+ Add Project";
    plus.addEventListener("click", () => {
      displayProjectCreator();
    });
    projectsList.appendChild(plus);
  };

  return {
    render,
  };
})();

export { sidebar };
