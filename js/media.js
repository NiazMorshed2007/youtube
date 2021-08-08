var progress = document.querySelector(".progress-wrapper");

video.addEventListener("click", videoControlOnClick);

function myFunction() {
  if (x.matches) {
    // If media query matches
  } else {
    document.body.style.display = "block";
  }
}

var x = window.matchMedia("(min-aspect-ratio: 16/9)");
myFunction(x);
x.addListener(myFunction);

var timeOut;

function videoControlOnClick() {
  progress.classList.add("progress-active");

  timeOut = setTimeout(() => {
    progress.classList.remove("progress-active");
  }, 1300);
}
