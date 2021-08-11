var multimedia = document.querySelector(".multimedia");
var posters = document.querySelectorAll(".inner-home-videos > div");
var suggestions = document.querySelectorAll(".inner-suggestions > div");
var video = document.querySelector("video");
var back = document.querySelector(".back");
let counter = 1;

back.addEventListener("click", backtoHome);

posters.forEach((e, i) => {
  managingVideos(e);
  removePlayingVideo(e, i, posters);
});

suggestions.forEach((e, i) => {
  managingVideos(e);
  removePlayingVideo(e, i, suggestions);
});

function removePlayingVideo(e, i, arr) {
  e.addEventListener("click", () => {
    for (let j = 0; j < arr.length; j++) {
      if (j == i) {
        suggestions[i].style.display = "none";
      } else {
        suggestions[j].style.display = "block";
      }
    }
  });
}
function managingVideos(e) {
  e.addEventListener("click", () => {
    counter = e.classList[1];
    console.log(e.classList[1]);
    playVideo();
  });
  e.addEventListener("click", showMultimedia);
}

function showMultimedia() {
  multimedia.classList.add("multimedia-active");
  document.querySelector(".inner-home-videos").style.overflowY = "hidden";
}

function backtoHome() {
  multimedia.classList.remove("multimedia-active");
  video.pause();
  document.querySelector(".inner-home-videos").style.overflowY = "scroll";
}
