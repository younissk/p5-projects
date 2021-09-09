// import p5 from "p5";

let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let y = map(sin(angle), -1, 1, -200 - 10, 200 - 10);

  for (let x = 0; x < width; x += 30) {
    push();
    translate(x, height / 2);
    fill(0, 255);
    circle(0, y, 20);
    line(0, y, 0, 0);
    pop();
  }

  angle += 0.01;
}
