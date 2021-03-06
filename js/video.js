var playPauseBtn = document.querySelector(".play-pause-icon");
var progress = document.querySelector(".progress");
var juice = document.querySelector(".juice");
var overlay = document.querySelector(".video-overlay");
var forwardDiv = document.querySelector(".left-video-overlay");
var rewindDiv = document.querySelector(".right-video-overlay");

playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("play", videoOverlay);
video.addEventListener("pause", videoOverlay);
video.addEventListener("click", videoOverlayOnClick);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", handleProgress);
video.addEventListener("timeupdate", handleJuice);
progress.addEventListener("input", setInput);
video.addEventListener("timeupdate", updateTime);
forwardDiv.addEventListener("dblclick", rewindFunc);
rewindDiv.addEventListener("dblclick", forwardFunc);

function togglePlay() {
  console.log("working");
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function playVideo() {
  video.src = "video" + counter + ".mp4";
  video.play();
}

var timeOut;

function videoOverlayOnClick() {
  const videoOverlay = document.querySelector(".video-overlay");
  videoOverlay.classList.add("video-overlay-active");
  console.log("overlay");

  timeOut = setTimeout(() => {
    videoOverlay.classList.remove("video-overlay-active");
  }, 1300);
}

function videoOverlay() {
  const videoOverlay = document.querySelector(".video-overlay");
  this.paused
    ? videoOverlay.classList.add("video-overlay-active")
    : videoOverlay.classList.remove("video-overlay-active");
  this.paused ? clearTimeout(timeOut) : console.log("playing");
}
function updateIcon() {
  const icon = this.paused ? "play_circle_filled" : "pause_circle_filled";
  playPauseBtn.innerHTML = icon;
}

function handleJuice() {
  const percent = (video.currentTime / video.duration) * 100;
  juice.style.width = percent + "%";
}

function forwardFunc() {
  video.currentTime += 5;
  console.log("forward");
}

function rewindFunc() {
  video.currentTime -= 5;
  console.log("rewind");
}

function setInput() {
  video.currentTime = progress.value;
  progress.max = video.duration;
}

function handleProgress() {
  progress.value = video.currentTime;
  progress.max = video.duration;
}

function updateTime() {
  const currentTime = document.getElementById("current-time");
  const totalTime = document.getElementById("total-time");

  var currentVideoT = video.currentTime;
  var totalVideoT = video.duration;

  var currentSecs = Math.floor(currentVideoT % 60);
  var currentMins = Math.floor((currentVideoT % 3600) / 60);

  var totalSecs = Math.floor(totalVideoT % 60);
  var totalMins = Math.floor((totalVideoT % 3600) / 60);

  currentTime.children[0].textContent = currentMins;
  currentTime.children[1].textContent = currentSecs;
  totalTime.children[0].textContent = totalMins;
  totalTime.children[1].textContent = totalSecs;

  if (currentSecs < 10) {
    currentTime.children[1].textContent = "0" + currentSecs;
  }
  if (totalSecs < 10) {
    totalTime.children[1].textContent = "0" + totalSecs;
  }
}
