var progressWrapper = document.querySelector(".progress-wrapper");

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

    // video.addEventListener("click", openFullscreen);

    // var elem = document.documentElement;

    // /* Function to open fullscreen mode */
    // function openFullscreen() {
    //   if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    //   } else if (elem.mozRequestFullScreen) {
    //     /* Firefox */
    //     elem.mozRequestFullScreen();
    //   } else if (elem.webkitRequestFullscreen) {
    //     /* Chrome, Safari & Opera */
    //     elem.webkitRequestFullscreen();
    //   } else if (elem.msRequestFullscreen) {
    //     /* IE/Edge */
    //     elem = window.top.document.body; //To break out of frame in IE
    //     elem.msRequestFullscreen();
    //   }
    // }

    /* Function to close fullscreen mode */

    // console.log("matched");
  } else {
    // function closeFullscreen() {
    //   if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //   } else if (document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //   } else if (document.webkitExitFullscreen) {
    //     document.webkitExitFullscreen();
    //   } else if (document.msExitFullscreen) {
    //     window.top.document.msExitFullscreen();
    //   }
    // }
    // video.addEventListener("click", closeFullscreen);
    // console.log("not-matched");
  }
}

setInterval(media, 1000);
