var burger = document.querySelector(".burger");
var modal = document.querySelector(".modal");
var hiddenDiv = document.querySelector(".hidden-div");

burger.addEventListener("click", showModal);
document.body.addEventListener("click", (e) => {
  hideModal(e);
});

function showModal() {
  modal.classList.add("modal-active");
  hiddenDiv.classList.add("hidden-div-active");
}

function hideModal(e) {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("modal-active");
    hiddenDiv.classList.remove("hidden-div-active");
  }
}
