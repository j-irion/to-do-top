import "./style.css";
import { sidebar } from "./sidebar.js";
import { content } from "./content.js";
import { app } from "./app.js";
import { addProjectsToCreator, displayNoteCreator } from "./modal.js";

app.loadFromLocalStorage();

sidebar.render();

content.renderProject(app.projects[0]);

addProjectsToCreator();

let btnAddNote = document.getElementById("btn-add-note");
btnAddNote.onclick = () => {
  document.getElementById("input-date").value = new Date()
    .toISOString()
    .substring(0, 10);
  displayNoteCreator();
};
