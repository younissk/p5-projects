let label = "test";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  translate(200, 200);

  let x = map(mouseX, 0, 0, 200);

  let mouseVector = createVector(x, mouseY);

  stroke(255, 0, 0);
  line(0, 0, mouseVector.x, mouseVector.y);

  text(`${mouseVector.x} | ${mouseVector.y}`, mouseVector.x, mouseVector.y);

  // stroke(0);
  // line(200, 0, -200, 0);
  // line(0, 200, 0, -200);
}
