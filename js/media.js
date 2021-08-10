var progressWrapper = document.querySelector(".progress-wrapper");

function myFunction() {
  if (x.matches) {
    // video.addEventListener("play", progressWrapperActiveAuto);
    // video.addEventListener("pause", progressWrapperActiveAuto);
    // video.addEventListener("click", progressWrapperActiveOnClick);
    // If media query matches
  } else {
    document.body.style.display = "block";
  }
}

var x = window.matchMedia("(min-aspect-ratio: 16/9)");
myFunction(x);
x.addListener(myFunction);

// var timeOut;

// function progressWrapperActiveAuto() {
//   this.paused
//     ? progressWrapper.classList.add("progress-wrapper-active")
//     : progressWrapper.classList.remove("progress-wrapper-active");
//   this.paused ? clearTimeout(timeOut) : console.log("playing");
// }

// function progressWrapperActiveOnClick() {
//   // const videoOverlay = document.querySelector(".video-overlay");
//   progressWrapper.classList.add("progress-wrapper-active");
//   console.log("overlay");

//   timeOut = setTimeout(() => {
//     progressWrapper.classList.remove("progress-wrapper-active");
//   }, 1300);
// }
