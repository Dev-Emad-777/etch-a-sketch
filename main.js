// select page elements
const grid = document.querySelector(".grid");
const change = document.querySelector(".change");
const erase = document.querySelector(".erase");
const rainbow = document.querySelector(".rainbow");
const black = document.querySelector(".black");

// initialize size
let size = 30;

// set a click listener for size change button
change.addEventListener("click", () => {
  size = +prompt("chose size (1-70)");
  createGrid(size);
});

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

  const cells = document.querySelectorAll(".cell");

  // cells hover behave
  cells.forEach((one) => {
    one.addEventListener("mouseover", () => {
      one.classList.add("black");
    });
  });
}

createGrid(size);
