const search = document.querySelectorAll(".search");
const btn = document.querySelectorAll(".btn");
const input = document.querySelectorAll(".input");

btn.forEach((index) => {
  index.addEventListener("click", () => {
    search.forEach((element) => {
      element.classList.toggle("active");
      console.log(element);
    });

    input.forEach((element) => {
      element.focus();
    });
  });
});