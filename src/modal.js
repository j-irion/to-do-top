import "./style.css";
import { Note } from "./notes.js";
import { app } from "./app.js";
import { Project } from "./projects.js";
import { sidebar } from "./sidebar.js";
import { content } from "./content";

let btnNoteModalClose = document.getElementById("note-close");
btnNoteModalClose.onclick = closeNoteCreator;

let btnProjectModalClose = document.getElementById("project-close");
btnProjectModalClose.onclick = closeProjectCreator;

window.onclick = function (event) {
  if (event.target == document.getElementById("notesModal")) {
    closeNoteCreator();
  }
  if (event.target == document.getElementById("project-modal")) {
    closeProjectCreator();
  }
};

let noteCreationForm = document.getElementById("note-creation-form");
noteCreationForm.onsubmit = (e) => {
  if (document.getElementById("modal-heading").textContent === "New Note")
    submitNewNote(e);
  else submitEditNote(e);
};

function submitNewNote(e) {
  e.preventDefault();

  let name = document.getElementById("input-title").value;
  let priority = document.getElementById("input-priority").value;
  let dueDate = new Date(document.getElementById("input-date").value);
  let description = document.getElementById("input-description").value;
  let project = app.getProject(
    document.getElementById("input-project").selectedIndex
  );

  let note = Note(name, priority, dueDate, description, false);
  project.addNote(note);

  closeNoteCreator();
  sidebar.render();
  content.renderProject(content.renderedProject);
}

function submitEditNote(e) {
  e.preventDefault();

  let note = app.getNoteBeingEdited();

  note.title = document.getElementById("input-title").value;
  note.priority = document.getElementById("input-priority").value;
  note.dueDate = new Date(document.getElementById("input-date").value);
  note.description = document.getElementById("input-description").value;
  note.project = app.getProject(
    document.getElementById("input-project").selectedIndex
  );
  note.beingEdited = false;
  closeNoteCreator();
  sidebar.render();
  content.renderProject(content.renderedProject);
}

let projectAddBtn = document.getElementById("modal-btn-add-project");
projectAddBtn.onclick = () => {
  let title = document.getElementById("input-project-title");
  app.addProject(Project(title.value));
  console.log(app.projects);
  title.value = "";
  closeProjectCreator();
  sidebar.render();
  addProjectsToCreator();
};

function addProjectsToCreator() {
  let inputProject = document.getElementById("input-project");
  inputProject.innerHTML = "";
  console.log(app.getProject(1));
  app.projects.forEach((project) => {
    let projectOption = document.createElement("option");
    projectOption.value = project.name;
    projectOption.innerHTML = project.name;
    inputProject.appendChild(projectOption);
  });
}

function displayNoteEditor(note) {
  document.getElementById("input-title").value = note.title;
  document.getElementById("input-priority").value = note.priority;
  document.getElementById("input-date").value = note.dueDate
    .toISOString()
    .substring(0, 10);
  document.getElementById("input-description").value = note.description;
  document.getElementById("input-project").selectedIndex =
    app.getProjectIndexOfNote(note);
  document.getElementById("modal-heading").textContent = "Edit Note";

  document.getElementById("btn-note-submit").style.display = "none";
  document.getElementById("btn-note-edit").style.display = "block";

  displayNoteCreator();
}

function displayNoteCreator() {
  let modal = document.getElementById("notesModal");
  document.getElementById("input-date").value = new Date()
    .toISOString()
    .substring(0, 10);
  modal.style.display = "block";
}

function closeNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "none";

  document.getElementById("btn-note-submit").style.display = "block";
  document.getElementById("btn-note-edit").style.display = "none";

  //clear form
  document.getElementById("modal-heading").textContent = "New Note";
  document.querySelectorAll("input").forEach((e) => (e.value = ""));
  document.querySelectorAll("select").forEach((e) => (e.selectedIndex = 0));
  document.querySelector("textarea").value = "";
}

function displayProjectCreator() {
  let modal = document.getElementById("project-modal");
  modal.style.display = "block";
}

function closeProjectCreator() {
  let modal = document.getElementById("project-modal");
  modal.style.display = "none";
}

export {
  displayNoteCreator,
  closeNoteCreator,
  displayProjectCreator,
  closeProjectCreator,
  displayNoteEditor,
  addProjectsToCreator,
};
