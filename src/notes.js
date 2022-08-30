export function displayNoteCreator() {
  let modal = document.getElementById("notesModal");
  console.log(modal);
  modal.style.display = "block";
}

export function closeNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "none";
}
