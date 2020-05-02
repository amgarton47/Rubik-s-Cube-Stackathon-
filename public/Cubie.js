const COLORS = [
  "#ffffff", // white
  "#f5ef42", // yellow
  "#eda405", // orange
  "#fa382a", // red
  "#10e81e", // green
  "#1029e8", // blue
  "#000000", //black
];

const U = 0;
const D = 1;
const L = 2;
const R = 3;
const F = 4;
const B = 5;

class Cubie {
  constructor(x, y, z, size) {
    this.size = size;
    this.vector = new p5.Vector(x, y, z);
    this.config = new Config();
  }

  display() {
    strokeWeight(2);
    push();
    translate(this.vector.x, this.vector.y, this.vector.z);

    const r = this.size / 2;

    // F / B
    beginShape();
    fill(COLORS[this.config.get(F)]);
    vertex(-r, -r, r);
    vertex(r, -r, r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);

    beginShape();
    fill(COLORS[this.config.get(B)]);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(-r, r, -r);
    endShape(CLOSE);

    // U / D
    beginShape();
    fill(COLORS[this.config.get(U)]);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, -r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);

    beginShape();
    fill(COLORS[this.config.get(D)]);
    vertex(-r, r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);

    // L / R
    beginShape();
    fill(COLORS[this.config.get(L)]);
    vertex(-r, -r, -r);
    vertex(-r, r, -r);
    vertex(-r, r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);

    beginShape();
    fill(COLORS[this.config.get(R)]);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(r, -r, r);
    endShape(CLOSE);

    pop();
  }

  highlight() {
    this.config = new Config([6, 6, 6, 6, 6, 6]);
  }
}
