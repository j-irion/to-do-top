import "./style.css";
import { displayNoteCreator, closeNoteCreator, Note } from "./notes.js";
import { Project } from "./projects.js";

let btnAddNote = document.getElementById("btn-add-note");
btnAddNote.onclick = displayNoteCreator;

let btnModalClose = document.getElementsByClassName("close")[0];
btnModalClose.onclick = closeNoteCreator;

window.onclick = function (event) {
  if (event.target == document.getElementById("notesModal")) {
    closeNoteCreator();
  }
};

let noteCreationForm = document.getElementById("note-creation-form");
noteCreationForm.onsubmit = (e) => {
  e.preventDefault();
  document.querySelectorAll("input").forEach((e) => (e.value = ""));
  document.querySelectorAll("select").forEach((e) => (e.selectedIndex = 0));
  document.querySelector("textarea").value = "";
  closeNoteCreator();
};
