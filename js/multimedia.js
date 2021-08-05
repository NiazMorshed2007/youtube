var multimedia = document.querySelector(".multimedia");
var posters = document.querySelectorAll(".inner-home-videos > div");
var suggestions = document.querySelectorAll(".inner-suggestions > div");
var video = document.querySelector("video");
let counter = 1;

console.log(posters);

posters.forEach((e) => {
  managingVideos(e);
});

suggestions.forEach((e) => {
  managingVideos(e);
});

function managingVideos(e) {
  e.addEventListener("click", () => {
    counter = e.classList[1];
    console.log(e.classList[1]);
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
