let walker;

let x;
let y;

let allOptions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
];

let grid;
let spacing = 100;
let cols;
let rows;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setupSketch() {
  cols = floor(width / spacing);
  rows = floor(height / spacing);
  x = floor(cols / 2);
  y = floor(rows / 2);
  background(51);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = false;
    }
  }
  console.log(x, y);
  walker = new Walker(x, y);
  grid[x][y] = true;
  frameRate(10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupSketch();
}

function draw() {
  walker.show();
  walker.update();
}

function isValid(i, j) {
  if (i < 0 || i >= cols || j < 0 || j >= rows) {
    return false;
  }
  return !grid[i][j];
}
