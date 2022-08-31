import "./style.css";

let btnNoteModalClose = document.getElementById("note-close");
btnNoteModalClose.onclick = closeNoteCreator;

let btnProjectModalClose = document.getElementById("project-close");
btnProjectModalClose.onclick = closeProjectCreator;

window.onclick = function (event) {
  if (event.target == document.getElementById("notesModal")) {
    closeNoteCreator();
  }
  if (event.target == document.getElementById("project-modal")) {
    closeProjectCreator();
  }
};

function displayNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "block";
}

function closeNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "none";
}

function displayProjectCreator() {
  let modal = document.getElementById("project-modal");
  modal.style.display = "block";
}

function closeProjectCreator() {
  let modal = document.getElementById("project-modal");
  modal.style.display = "none";
}

export {
  displayNoteCreator,
  closeNoteCreator,
  displayProjectCreator,
  closeProjectCreator,
};
