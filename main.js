const grid = document.querySelector(".grid");

let defaultSize = 10;

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
}

createGrid(defaultSize);
