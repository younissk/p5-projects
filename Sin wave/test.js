var start = 0;
var inc = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  translate(0, 200);
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(0, 255, 0);
    var y = (sin(xoff) * height) / 3;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(255, 0, 0);
    var y = (cos(xoff) * height) / 3;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(0, 0, 255);
    var y = (tan(xoff) * height) / 3;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

  start += inc;
  // noLoop();
}
