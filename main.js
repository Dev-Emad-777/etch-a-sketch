// select page elements
const grid = document.querySelector(".grid");
const change = document.querySelector(".change");
const erase = document.querySelector(".erase");
const blackButton = document.querySelector(".black-button");
const rainbowButton = document.querySelector(".rainbow-button");

let size = 30;

// set a click listener for size change button
change.addEventListener("click", () => {
  do {
    size = parseInt(prompt("Choose size (10-50)", 30), 10);
    if (isNaN(size) || size < 10 || size > 50) {
      size = 30; // Default size
    }
  } while (size < 10 || size > 50);
  createGrid(size);
});

// initialize color
let colorBlack = true;
let colorRainbow = false;

// set a click listener for black button
blackButton.addEventListener("click", () => {
  colorBlack = colorRainbow = false;
  colorBlack = true;
  pickColor();
});
// set a click listener for rainbow button
rainbowButton.addEventListener("click", () => {
  colorBlack = colorRainbow = false;
  colorRainbow = true;
  pickColor();
});

// set a click listener for erase button
erase.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((one) => {
    one.style.backgroundColor = "white";
  });
});

// Define a larger color palette
const colors = [
  "#FF0000", // Red
  "#FF4500", // OrangeRed
  "#FFA500", // Orange
  "#FFD700", // Gold
  "#FFFF00", // Yellow
  "#ADFF2F", // GreenYellow
  "#00FF00", // Lime
  "#32CD32", // LimeGreen
  "#008000", // Green
  "#20B2AA", // LightSeaGreen
  "#00FFFF", // Aqua
  "#00BFFF", // DeepSkyBlue
  "#1E90FF", // DodgerBlue
  "#0000FF", // Blue
  "#8A2BE2", // BlueViolet
  "#4B0082", // Indigo
  "#9400D3", // DarkViolet
  "#8B00FF", // Violet
];

function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

// pick color func
function pickColor() {
  const cells = document.querySelectorAll(".cell");

  // cells hover behave

  cells.forEach((one) => {
    one.addEventListener("mouseover", () => {
      one.style.backgroundColor = "black";
    });
  });

  if (colorRainbow) {
    {
      cells.forEach((one) => {
        one.addEventListener("mouseover", () => {
          one.style.backgroundColor = `${getRandomColor()}`;
        });
      });
    }
  }
}
function createGrid(size) {
  grid.innerHTML = "";

  const cellSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;

    grid.appendChild(cell);
  }

  pickColor();
}

createGrid(size);
