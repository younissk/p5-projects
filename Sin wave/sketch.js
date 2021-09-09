let time = 0;
let wave = [];
let coWave = [];
let Ampslider;
let RadiusSlider;

function setup() {
  createCanvas(windowWidth, 400);
  Ampslider = createSlider(0, 0.1, 0.05, 0.001);
  RadiusSlider = createSlider(10, 200, 100, 1);
}

function draw() {
  background(0);
  translate(200, 200);
  let radius = RadiusSlider.value();

  // coordinate system
  stroke(255);
  line(160, 0, width, 0);
  triangle(180 + 5, -radius + 5, 180, -radius, 180 - 5, -radius + 5);
  triangle(180 - 5, radius - 5, 180, radius, 180 + 5, radius - 5);
  line(180, radius, 180, -radius);

  // circle
  stroke(255);
  noFill();
  circle(0, 0, radius * 2);
  line(-radius, 0, radius, 0);
  line(0, -radius, 0, radius);

  let x = cos(time) * radius;
  let y = sin(time) * radius;

  wave.unshift(y);
  coWave.unshift(x);

  text(`y: ${round(map(y, radius, -radius, -1, 1), 1)}`, 0, y);

  fill(255);
  circle(-x, y, 8);
  // line(0, 0, -x, y);

  // cos line
  text(`x: ${round(map(coWave[0], radius, -radius, -1, 1), 1)}`, -x, 0);
  stroke(255, 0, 0);
  line(0, 0, 0, y);
  stroke(0, 255, 0);
  line(0, 0, -x, 0);

  // sin line
  translate(200, 0);
  stroke(255);
  text(`sin: ${round(map(y, radius, -radius, -1, 1), 1)}`, 0, y);

  // sinus
  beginShape();
  stroke(255, 0, 0);
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  //cos
  stroke(255);
  text(
    `cos: ${round(map(coWave[0], radius, -radius, -1, 1), 1)}`,
    0,
    coWave[0]
  );
  beginShape();
  stroke(0, 255, 0);
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, coWave[i]);
  }
  endShape();

  // second circle

  time += Ampslider.value();

  if (wave.length > 2000) {
    wave.pop();
  }
}
