let btnModalClose = document.getElementsByClassName("close")[0];
btnModalClose.onclick = closeNoteCreator;

window.onclick = function (event) {
  if (event.target == document.getElementById("notesModal")) {
    closeNoteCreator();
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

export { displayNoteCreator, closeNoteCreator };
