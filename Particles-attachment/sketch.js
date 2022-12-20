// This was heavily inspired by the official example
let particles = [];

let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / 20; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].create();
    particles[i].move();
    particles[i].joinParticles(particles.slice(i));
  }
}
