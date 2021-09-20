let n = 0;
let d = 0;
let c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  let clr = map(sin(c), 0, 1, 0, 255)
  stroke(255, clr, clr);
  
  noFill();
  beginShape();
  for (let i = 0; i < 360; i++) {
    let k = i * d;
    let r = (width / 5) * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape(CLOSE);
  n += 0.001;
  d += 0.005;
  c += 0.3;
}
