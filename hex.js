const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomIndex() {
  const randomIndex = Math.floor(Math.random() * hex.length);
  return randomIndex;
}

function getRandomColor() {
  let hexColor = `#`;
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomIndex()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}

btn.addEventListener("click", getRandomColor);
