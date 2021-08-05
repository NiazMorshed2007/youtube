var multimedia = document.querySelector(".multimedia");
var posters = document.querySelectorAll(".inner-home-videos > div");
var video = document.querySelector("video");
let counter = 1;

// console.log(posters);
// ex.
// var poster = document.querySelectorAll(".poster");

posters.forEach((e, i) => {
  // counter = i;
  // console.log(e);
  e.addEventListener("click", showMultimedia);
  e.addEventListener("click", () => {
    counter = i + 1;
    playVideo();
  });
});

function playVideo(i) {
  // counter = i;
  video.src = "video" + counter + ".mp4";
  video.play();
}

function showMultimedia() {
  multimedia.classList.add("multimedia-active");
}
