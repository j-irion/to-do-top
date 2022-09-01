import { app } from "./app.js";
import { displayNoteEditor } from "./modal.js";
import { Project } from "./projects.js";

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
      noteDiv.addEventListener("click", () => {
        renderNote(note, noteDiv);
      });
      let edit = document.createElement("span");
      edit.className = "material-symbols-rounded";
      edit.innerHTML = "edit";
      noteDiv.appendChild(edit);
      edit.addEventListener("click", () => {
        note.beingEdited = true;
        displayNoteEditor(note);
      });
    });
  };

  const renderNote = (note, noteDiv) => {
    let noteDivOpen = document.createElement("div");
    noteDivOpen.className = "note-div-open";
    let noteDivOpenColumnOne = document.createElement("div");
    noteDivOpenColumnOne.className = "note-div-open-column";
    let noteDivOpenColumnTwo = document.createElement("div");
    noteDivOpenColumnTwo.className = "note-div-open-column";
    noteDivOpen.appendChild(noteDivOpenColumnOne);
    noteDivOpen.appendChild(noteDivOpenColumnTwo);
    let titleElement = document.createElement("div");
    let dateElement = document.createElement("div");
    noteDivOpenColumnOne.appendChild(titleElement);
    noteDivOpenColumnOne.appendChild(dateElement);
    let descElement = document.createElement("div");
    let prioElement = document.createElement("div");
    noteDivOpenColumnTwo.appendChild(descElement);
    noteDivOpenColumnTwo.appendChild(prioElement);
    let titleHeading = document.createElement("h4");
    titleHeading.textContent = "Title:";
    let title = document.createElement("span");
    title.textContent = note.title;
    titleElement.appendChild(titleHeading);
    titleElement.appendChild(title);
    let dateHeading = document.createElement("h4");
    dateHeading.textContent = "Date:";
    let date = document.createElement("span");
    date.textContent = note.dueDate;
    dateElement.appendChild(dateHeading);
    dateElement.appendChild(date);
    let descHeading = document.createElement("h4");
    descHeading.textContent = "Description:";
    let desc = document.createElement("span");
    desc.textContent = note.description;
    descElement.appendChild(descHeading);
    descElement.appendChild(desc);
    let prioHeading = document.createElement("h4");
    prioHeading.textContent = "Priority:";
    let prio = document.createElement("span");
    prio.textContent = note.priority;
    prioElement.appendChild(prioHeading);
    prioElement.appendChild(prio);
    noteDiv.appendChild(noteDivOpen);
  };

  const renderToday = () => {
    let todaysNotes = [];
    console.log(app.projects);
    app.projects.forEach((proj) =>
      proj.notes.forEach((note) => {
        if (isToday(note.dueDate)) todaysNotes.push(note);
      })
    );
    let project = Project("Today");
    console.log(project);
    todaysNotes.forEach((note) => project.addNote(note));
    renderProject(project);
  };

  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };

  return {
    renderProject,
    renderToday,
    get renderedProject() {
      return renderedProject;
    },
  };
})();

export { content };
