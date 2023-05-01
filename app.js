const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function getRandomBackgroundColor() {
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();

  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  
  document.body.style.backgroundColor = color.textContent = randomColor;
}

btn.addEventListener("click", getRandomBackgroundColor);
