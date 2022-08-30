import "./style.css";
import { displayNoteCreator, closeNoteCreator } from "./notes.js";

let btnAddNote = document.getElementById("btn-add-note");
console.log(btnAddNote);
btnAddNote.onclick = displayNoteCreator;

let btnModalClose = document.getElementsByClassName("close")[0];
btnModalClose.onclick = closeNoteCreator;

window.onclick = function (event) {
  if (event.target == document.getElementById("notesModal")) {
    closeNoteCreator();
  }
};
