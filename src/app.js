import { Project } from "./projects.js";
let jc = require("json-cycle");

const app = (() => {
  let projects = [];
  let inbox = Project("Inbox");
  projects.push(inbox);

  const getProject = (index) => {
    return projects[index];
  };

  const addProject = (proj) => {
    projects.push(proj);
  };

  const getProjectIndexOfNote = (note) => {
    for (let i = 1; i < projects.length; ++i) {
      if (projects[i].notes.some((element) => element === note)) return i;
    }
  };

  const getNoteBeingEdited = () => {
    for (let i = 0; i < projects.length; ++i) {
      let proj = projects[i];
      let note = proj.notes.find((note) => note.beingEdited === true);
      if (note !== undefined) {
        return note;
      }
    }
  };

  const saveToLocalStorage = () => {
    let projNames = projects.map((project) => project.name);
    localStorage.setItem("projNames", jc.stringify(projNames));
    for (let i = 0; i < projects.length; ++i) {
      let saveNotes = projects[i].notes;
      localStorage.setItem(`notes${i}`, jc.stringify(saveNotes));
    }
  };

  const loadFromLocalStorage = () => {
    let projNames = jc.parse(localStorage.getItem("projNames"));
    if (projNames === null) return;
    projects = [];
    for (let i = 0; i < projNames.length; ++i) {
      let createdProj = Project(projNames[i]);
      createdProj.notes = jc.parse(localStorage.getItem(`notes${i}`));
      projects.push(createdProj);
    }
  };

  return {
    getProject,
    addProject,
    getProjectIndexOfNote,
    getNoteBeingEdited,
    saveToLocalStorage,
    loadFromLocalStorage,
    get projects() {
      return projects;
    },
  };
})();

export { app };
