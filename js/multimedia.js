var multimedia = document.querySelector(".multimedia");
var posters = document.querySelectorAll(".inner-home-videos > div");
var suggestions = document.querySelectorAll(".inner-suggestions > div");
var video = document.querySelector("video");
let counter = 1;

console.log(posters);

posters.forEach((e) => {
  managingVideos(e);
});

// video.src = "video4.mp4";

// console.log();

// console.log(posters[0]);

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
  hideOverflow();
}

function showMultimedia() {
  multimedia.classList.add("multimedia-active");
}

function hideOverflow() {
  if (!multimedia.classList.contains("multimedia-active")) {
    document.querySelector(".inner-home-videos").style.overflowY = "hidden";
  } else {
    document.querySelector(".inner-home-videos").style.overflowY = "scroll";
  }
}
