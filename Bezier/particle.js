class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.yweight = random(-0.01, 0.01);
    this.yoffset = 0;
    this.xweight = random(-0.01, 0.01);
    this.xoffset = 0;
  }

  update() {
    // this.x += noise(this.yoffset);

    this.y = map(sin(this.yoffset), 0, 1, 0, height / 2);

    this.x = map(sin(this.xoffset), 0, 1, width / 2, width);

    this.yoffset += this.yweight;
    this.xoffset += this.xweight;
  }
}
