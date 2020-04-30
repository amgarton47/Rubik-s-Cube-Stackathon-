const COLORS = {
  red: "#fa382a",
  blue: "#1029e8",
  green: "#10e81e",
  orange: "#eda405",
  yellow: "#f5ef42",
  white: "#ffffff",
};

class Cubie {
  constructor(x, y, z, size) {
    this.size = size;
    this.vector = new p5.Vector(x, y, z);
  }

  display() {
    // fill(255);
    // stroke(0);
    strokeWeight(2);
    push();
    translate(this.vector.x, this.vector.y, this.vector.z);
    if (this.bool) {
      fill(255, 0, 0);
    }

    const r = this.size / 2;
    // z-fixed
    beginShape();
    fill(COLORS.blue);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(-r, r, -r);
    endShape(CLOSE);

    beginShape();
    fill(COLORS.green);
    vertex(-r, -r, r);
    vertex(r, -r, r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);

    // y-fixed
    beginShape();
    fill(COLORS.white);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, -r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);

    beginShape();
    fill(COLORS.yellow);
    vertex(-r, r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);

    // x-fixed
    beginShape();
    fill(COLORS.orange);
    vertex(-r, -r, -r);
    vertex(-r, r, -r);
    vertex(-r, r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);

    beginShape();
    fill(COLORS.red);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(r, -r, r);
    endShape(CLOSE);

    pop();
  }
}
