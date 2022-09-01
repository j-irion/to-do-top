const Project = function (name) {
  let projectName = name;
  let notes = [];
  const addNote = (note) => {
    notes.push(note);
  };

  const deleteNote = (inputNote) => {
    notes = notes.filter((note) => note !== inputNote);
  };

  return {
    get name() {
      return projectName;
    },
    set name(name) {
      projectName = name;
    },
    get notes() {
      return notes;
    },
    addNote,
    deleteNote,
  };
};

export { Project };
