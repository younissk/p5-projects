function setup() {
  createCanvas(400, 400);
}

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; x < height; y++) {
      let index = x + y * width;
      pixels[index] = color(255, 0, 255);
    }
  }
  updatePixels();
}
