const circles = document.querySelectorAll(".circle");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

const ProgressLine = document.getElementById("Progress-Line");

let activeCounter = 1;

next.addEventListener("click", () => {
  activeCounter++;
  if (activeCounter > circles.length) {
    activeCounter = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  activeCounter--;
  if (activeCounter < 1) {
    activeCounter = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < activeCounter) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  let actives = document.querySelectorAll(".active");

  ProgressLine.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (activeCounter === 1) {
    prev.disabled = true;
  } else if (activeCounter === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}