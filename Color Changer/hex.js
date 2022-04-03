const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColors = "#";
  for (let i = 0; i < 6; i++) {
    hexColors += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = hexColors;
  color.textContent = hexColors;
});
