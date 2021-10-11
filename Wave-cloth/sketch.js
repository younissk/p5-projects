// Heavily inspired by the corrisponing official example 
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill(0, 10, 250);
  background(10);

  for (let x = 0; x <= width - 10; x = x + 10) {
    for (let y = 0; y <= height - 10; y = y + 10) {
      const xAngle = map(0, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(0, 0, height, -4 * PI, 4 * PI, true);
      
      
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const X = x + 20 * cos(2 * PI * time + angle);
      const Y = y + 20 * sin(2 * PI * time + angle);

      ellipse(X, Y, 5);
    }
  }

  time += 0.003;
}
