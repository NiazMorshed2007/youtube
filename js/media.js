var progressWrapper = document.querySelector(".progress-wrapper");

// function myFunction() {
//   if (x.matches) {
//     video.addEventListener("play", progressWrapperOnVideo);
//     video.addEventListener("pause", progressWrapperOnVideo);
//     video.addEventListener("click", progressWrapperAppear);
//     // If media query matches
//   } else {
//     document.body.style.display = "block";
//   }
// }

// var x = window.matchMedia("(min-aspect-ratio: 16/9)");
// myFunction(x);
// x.addListener(myFunction);

// // var timeOut;

// // function progressWrapperActiveAuto() {
// //   this.paused
// //     ? progressWrapper.classList.add("progress-wrapper-active")
// //     : progressWrapper.classList.remove("progress-wrapper-active");
// //   this.paused ? clearTimeout(timeOut) : console.log("playing");
// // }

// // function progressWrapperActiveOnClick() {
// //   // const videoOverlay = document.querySelector(".video-overlay");
// //   progressWrapper.classList.add("progress-wrapper-active");
// //   console.log("overlay");

// //   timeOut = setTimeout(() => {
// //     progressWrapper.classList.remove("progress-wrapper-active");
// //   }, 1300);
// // }
const mediaQuery = window.matchMedia("(min-aspect-ratio: 16/9)");
// Check if the media query is true
function media() {
  if (mediaQuery.matches) {
    var progressTimeout;

    function progressWrapperAppear() {
      progressWrapper.classList.add("progress-wrapper-active");

      progressTimeout = setTimeout(() => {
        progressWrapper.classList.remove("progress-wrapper-active");
      }, 1300);
    }

    function progressWrapperOnVideo() {
      this.paused
        ? progressWrapper.classList.add("progress-wrapper-active")
        : progressWrapper.classList.remove("progress-wrapper-active");
      this.paused ? clearTimeout(progressTimeout) : console.log("playing>..");
    }
    video.addEventListener("play", progressWrapperOnVideo);
    video.addEventListener("pause", progressWrapperOnVideo);
    video.addEventListener("click", progressWrapperAppear);
    console.log("matched");
  } else {
    console.log("not-matched");
  }
}

setInterval(media, 1000);
