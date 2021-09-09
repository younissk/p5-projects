var minval = -0.5;
var maxval = 0.5;

var offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  var maxiterations = 20;

  minval = map(sin(offset), 0, 1, -0.5, -2.5);
  maxval = map(sin(offset), 0, 1, 0.5, 2.5);

  console.log(minval, maxval);

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, minval, maxval);
      var b = map(y, 0, height, minval, maxval);

      var ca = a;
      var cb = b;

      var n = 0;
      var z = 0;

      while (n < maxiterations) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if (abs(a + b) > 16) {
          break;
        }

        n++;
      }

      var bright = 200;
      // var bright = map(n, 0, maxiterations, 0, 255);
      // bright = map(sqrt(bright), 0, 1, 0, 255);
      if (n === maxiterations) {
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  offset += 0.001;
}
