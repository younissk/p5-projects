// Made with the help of the coding train tutorial

let grid;
let spacing = 80;
let cols, rows;
let path = [];
let spot;

let offset = 0;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / spacing);
  rows = floor(height / spacing);
  background(51);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }
  let startx = floor(cols / 2);
  let starty = floor(rows / 2);
  spot = grid[startx][starty];
  path.push(spot);
  spot.visited = true;
}

function isValid(i, j) {
  if (i < 0 || i >= cols || j < 0 || j >= rows) {
    return false;
  }
  return !grid[i][j].visited;
}

function draw() {
  frameRate(20);

  let r = map(sin(offset), 0, 1, 0, 255);
  let g = map(cos(offset), 0, 1, 0, 255);
  let b = map(noise(offset), 0, 1, 0, 255);

  background(map(sin(offset), 0, 1, 10, 51));
  translate(spacing * 0.5, spacing * 0.5);

  spot = spot.nextSpot();
  if (!spot) {
    let stuck = path.pop();
    stuck.clear();
    spot = path[path.length - 1];
  } else {
    path.push(spot);
    spot.visited = true;
  }

  if (path.length === cols * rows) {
    console.log("Solved!");
    noLoop();
  }

  stroke(r, g, b);
  strokeWeight(spacing * 0.1);
  noFill();
  beginShape();
  for (let spot of path) {
    vertex(spot.x, spot.y);
  }
  endShape();

  stroke(r, g, b);
  strokeWeight(spacing * 0.5);
  point(spot.x, spot.y);
  offset += 0.01;
}
