let particles = [];

function setup() {
  createCanvas(windowWidth, 400);
}

function draw() {
  background(0);

  for (let i = 0; i < 1; i++) {
    particles.push(new Particle(windowWidth / 2, 10));
  }

  for (let particle of particles) {
    let gravity = createVector(0, 0.1);
    particle.applyForce(gravity);
    particle.update();
    particle.show();
    particle.edges();
  }

  // This deletes the elements that are too old
  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}
