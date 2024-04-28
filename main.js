// select page elements
const grid = document.querySelector(".grid");
const change = document.querySelector(".change");
const erase = document.querySelector(".erase");
const blackButton = document.querySelector(".black-button");
const rainbowButton = document.querySelector(".rainbow-button");

// initialize size
let size = 30;

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

// set a click listener for size change button
change.addEventListener("click", () => {
  size = +prompt("chose size (1-70)");
  createGrid(size);
});

// set a click listener for erase button
erase.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((one) => {
    one.classList.remove("black");
    one.classList.remove("rainbow");
  });
});
// pick color func

function pickColor() {
  const cells = document.querySelectorAll(".cell");

  // cells hover behave

  cells.forEach((one) => {
    one.addEventListener("mouseover", () => {
      one.classList.remove("rainbow");
      one.classList.add("black");
    });
  });

  if (colorRainbow) {
    {
      cells.forEach((one) => {
        one.addEventListener("mouseover", () => {
          one.classList.remove("black");
          one.classList.add("rainbow");
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
