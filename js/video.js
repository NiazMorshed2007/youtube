var playPauseBtn = document.querySelector(".play-pause");
var progress = document.querySelector(".progress");
var juice = document.querySelector(".juice");
var forward = document.querySelector(".forward");
var rewind = document.querySelector(".rewind");

playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", handleProgress);
forward.addEventListener("click", forwardFunc);
rewind.addEventListener("click", rewindFunc);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", scrub);

function togglePlay() {
  console.log("working");
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateIcon() {
  const icon = this.paused ? "play_circle_filled" : "pause_circle_filled";
  playPauseBtn.innerHTML = icon;
}

function forwardFunc() {
  video.currentTime += 5;
}

function rewindFunc() {
  video.currentTime -= 5;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  juice.style.width = percent + "%";
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}
