class Walker {
  constructor(xpos, ypos) {
    this.pos = createVector(xpos, ypos);
  }

  update() {
    // before picking where to go,
    // I need to check if its still in the screen

    // checking to the right:
    let options = [];
    for (let option of allOptions) {
      let newX = this.pos.x + option.dx;
      let newY = this.pos.y + option.dy;
      if (isValid(newX, newY)) {
        options.push(option);
      }
    }
    // choose a direction from the avaible options
    let step = random(options);

    // if there are options, move
    if (options.length > 0) {
      // Dray lines between last and new spot
      strokeWeight(spacing / 4);
      stroke(255);
      beginShape();
      vertex(this.pos.x * spacing, this.pos.y * spacing);
      // Move the walker
      this.pos.x += step.dx;
      this.pos.y += step.dy;
      vertex(this.pos.x * spacing, this.pos.y * spacing);
      endShape();
    } else {
      setupSketch();
    }

    grid[this.pos.x][this.pos.y] = true;
  }

  show() {
    stroke(255);
    strokeWeight(spacing / 2);
    point(this.pos.x * spacing, this.pos.y * spacing);
  }
}
