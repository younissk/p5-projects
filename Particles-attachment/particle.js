// This was heavily inspired by the official example
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(3, 20);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
    this.red = random(200);
    this.green = random(10);
    this.blue = random(10);
  }

  create() {
    noStroke();
    fill(this.red, this.green, this.blue);
    circle(this.x, this.y, this.r);
  }

  move() {
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  joinParticles(particles) {
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke(this.red, this.green, this.blue);
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}
