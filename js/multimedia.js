var multimedia = document.querySelector(".multimedia");
var posters = document.querySelectorAll(".inner-home-videos > div");
var video = document.querySelector("video");
let counter = 1;

posters.forEach((e, i) => {
  managingVideos(e, i);
});

function managingVideos(e, i) {
  e.addEventListener("click", (event) => {
    counter = event.target.alt || event.target.id;
    playVideo();
  });
  e.addEventListener("click", showMultimedia);
}

function playVideo() {
  video.src = "video" + counter + ".mp4";
  video.play();
}

function showMultimedia() {
  multimedia.classList.add("multimedia-active");
}
