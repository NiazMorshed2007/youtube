var multimedia = document.querySelector(".multimedia");
// ex.
var poster = document.querySelectorAll(".poster");

poster[1].addEventListener("click", showMultimedia);

function showMultimedia() {
  multimedia.classList.add("multimedia-active");
}
