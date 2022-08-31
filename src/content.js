import { app } from "./app";

const content = (() => {
  let renderedProject = app.projects[0];
  const renderProject = (project) => {
    renderedProject = project;
    let contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    let projectHeader = document.createElement("h2");
    projectHeader.textContent = project.name;
    contentDiv.appendChild(projectHeader);
    project.notes.forEach((note) => {
      let noteDiv = document.createElement("div");
      noteDiv.textContent = note.title;
      contentDiv.appendChild(noteDiv);
    });
  };

  return {
    renderProject,
    get renderedProject() {
      return renderedProject;
    },
  };
})();

export { content };
