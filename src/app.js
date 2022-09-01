import { Project } from "./projects.js";

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
      console.log(proj);
      let note = proj.notes.find((note) => note.beingEdited === true);
      if (note !== undefined) {
        return note;
      }
    }
  };

  return {
    getProject,
    addProject,
    getProjectIndexOfNote,
    getNoteBeingEdited,
    get projects() {
      return projects;
    },
  };
})();

export { app };
