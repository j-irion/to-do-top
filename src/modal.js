import "./style.css";
import { Note } from "./notes.js";
import { app } from "./app.js";

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
  e.preventDefault();

  let name = document.getElementById("input-title").value;
  let priority = document.getElementById("input-priority").value;
  let dueDate = document.getElementById("input-date").value;
  let description = document.getElementById("input-description").value;
  let project = app.getProject(
    document.getElementById("input-project").selectedIndex
  );

  let note = Note(name, priority, dueDate, description, false);
  project.addNote(note);

  //clear form
  document.querySelectorAll("input").forEach((e) => (e.value = ""));
  document.querySelectorAll("select").forEach((e) => (e.selectedIndex = 0));
  document.querySelector("textarea").value = "";

  closeNoteCreator();
  console.log(app.projects);
};

function displayNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "block";
}

function closeNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "none";
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
};