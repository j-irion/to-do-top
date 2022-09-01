import "./style.css";
import { sidebar } from "./sidebar.js";
import { content } from "./content.js";
import { app } from "./app.js";
import { addProjectsToCreator } from "./modal.js";

sidebar.render();

content.renderProject(app.projects[0]);

addProjectsToCreator();
