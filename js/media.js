var control = document.querySelector(".control");

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
  control.classList.add("control-active");

  timeOut = setTimeout(() => {
    control.classList.remove("control-active");
  }, 1300);
}
