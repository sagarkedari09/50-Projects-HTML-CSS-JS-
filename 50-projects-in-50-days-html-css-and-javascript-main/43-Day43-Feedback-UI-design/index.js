const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const pannel = document.querySelector("#pannel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  pannel.innerHTML = `
    <i class="fas fa-heart"></i>
    <h4>Thank You</h4>
    <h4>Feedback: ${selectedRating}</h4>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeactive() {
  for (let count = 0; count < ratings.length; count++) {
    ratings[count].classList.remove("active");
  }
}
