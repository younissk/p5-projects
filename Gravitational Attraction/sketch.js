let movers = [];
let attractor;
let Gslider;

function setup() {
  createCanvas(windowWidth, 500);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(10, 30);
    movers[i] = new Mover(x, y, m);
  }
  attractor = new Attractor(width / 2, height / 2, 300);
  background(0);
  Gslider = createSlider(0, 20, 2, 0.01);
}

function draw() {
  background(0, 50);
  let yplus = 20;
  let moonNumber = 1;
  for (let mover of movers) {
    mover.update();
    mover.show();
    mover.stats(yplus, moonNumber);
    attractor.attract(mover);
    yplus += 20;
    moonNumber += 1;
  }
  //   if (mouseIsPressed) {
  //     attractor.pos.x = mouseX;
  //     attractor.pos.y = mouseY;
  //   }
  attractor.show();
  text(`eigentliche Gravitationskonstante: 6.67430(15)e-11`, 20, 20);
  text(`Momentane Gravitationskonstante: ${Gslider.value()}`, 20, 40);
}

class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(10);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    noStroke();
    fill(100, 100, 0);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    stroke(255);
  }

  stats(y, moonNumber) {
    noStroke();
    fill(0, 255, 0);
    text(
      `Mond ${moonNumber}: m = ${round(this.mass)} ; r = ${round(
        this.r
      )} ; v = ${round(mag(this.vel.x, this.vel.y))}`,
      20,
      40 + y
    );
  }
}

class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = Gslider.value();
    let strength = (G * (this.mass * mover.mass)) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }

  show() {
    noStroke();
    fill(0, 255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
