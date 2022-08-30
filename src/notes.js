export function displayNoteCreator() {
  let modal = document.getElementById("notesModal");
  console.log(modal);
  modal.style.display = "block";
}

export function closeNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "none";
}

const Note = function (
  title,
  priority,
  dueDate,
  description,
  project,
  completed
) {
  let noteTitle = title;
  let notePrio = priority;
  let noteDueDate = dueDate;
  let noteDesc = description;
  let noteCompleted = completed;

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
  };
};
