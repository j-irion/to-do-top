import { displayNoteCreator } from "./modal.js";

let btnAddNote = document.getElementById("btn-add-note");
btnAddNote.onclick = () => {
  document.getElementById("input-date").value = new Date()
    .toISOString()
    .substring(0, 10);
  displayNoteCreator();
};
