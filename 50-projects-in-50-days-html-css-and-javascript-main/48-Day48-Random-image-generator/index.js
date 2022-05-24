const container = document.querySelector(".container");

const unsplashURL = "https://source.unsplash.com/random/";

const rows = 10;
for (let count = 0; count < rows * 3; count++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;

  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNumber()}*${getRandomNumber()}`;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
