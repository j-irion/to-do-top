const Note = function (title, priority, dueDate, description, completed) {
  let noteTitle = title;
  let notePrio = priority;
  let noteDueDate = dueDate;
  let noteDesc = description;
  let noteCompleted = completed;
  let beingEdited = false;

  return {
    get title() {
      return noteTitle;
    },
    set title(title) {
      noteTitle = title;
    },
    get priority() {
      return notePrio;
    },
    set priority(priority) {
      notePrio = priority;
    },
    get dueDate() {
      return noteDueDate;
    },
    set dueDate(dueDate) {
      noteDueDate = dueDate;
    },
    get description() {
      return noteDesc;
    },
    set description(description) {
      noteDesc = description;
    },
    get completed() {
      return noteCompleted;
    },
    set completed(completed) {
      noteCompleted = completed;
    },
    get beingEdited() {
      return beingEdited;
    },
    set beingEdited(inEdit) {
      beingEdited = inEdit;
    },
  };
};

export { Note };
