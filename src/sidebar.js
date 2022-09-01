import { app } from "./app";
import { displayProjectCreator } from "./modal";
import { content } from "./content";

const sidebar = (() => {
  const render = () => {
    const projectsList = document.querySelector(".projects");
    projectsList.innerHTML = "";
    app.projects.forEach((proj) => {
      let project = document.createElement("li");
      project.textContent = proj.name;
      project.className = "project";
      project.addEventListener("click", function () {
        content.renderProject(proj);
      });
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

let inbox = document.getElementById("inbox");
inbox.addEventListener("click", function () {
  content.renderProject(app.getProject(0));
});

let today = document.getElementById("today");
today.addEventListener("click", () => {
  content.renderToday();
});
