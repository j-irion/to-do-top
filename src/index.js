import "./style.css";
import { Note } from "./notes.js";
import { app } from "./app.js";
import { sidebar } from "./sidebar.js";
import { closeNoteCreator } from "./modal.js";

sidebar.render();

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
};
