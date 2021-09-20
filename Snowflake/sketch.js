let symmetry = 6;
let angle = 360 / symmetry;
let xoff = 0;
let yoff = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  translate(width/2, height/2);
  stroke(255, 0, 0);
  for (let i= 0; i < symmetry; i++) {
    rotate(angle);
    line(0, 0, width, 0);
  }
}

function draw() {
  xoff += 0.06;
  yoff += 0.06;
  background(0, 6);
  translate(width/2, height/2);
  
  let x = map(noise(xoff), 0, 1, 0, width/2);
  let y = map(noise(yoff), 0, 1, 0, height/2);
  
    let hu = noise(xoff) * 255;
    let c1 = map(sin(xoff), 0, 1, 0, 255);
    let c2 = map(sin(yoff), 0, 1, 0, 255);
  
    stroke(c1, c2, c1 + c2 / 2);
    for (let i = 1; i < symmetry; i++ ) {   
      rotate(angle);
      strokeWeight(10);
      point(x, y);
      push();
      scale(1,-1);
      point(x, y);
      pop();
      
    }    
}