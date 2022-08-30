const Project = function (name) {
  let projectName = name;
  let notes = [];
  const addNote = (note) => {
    notes.push(note);
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
  };
};

export { Project };
