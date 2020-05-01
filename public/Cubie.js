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

let sides;

class Config {
  constructor(sides) {
    if (sides) {
      this.sides = sides;
    } else {
      this.sides = [0, 1, 2, 3, 4, 5];
    }
  }

  get(side) {
    return this.sides[side];
  }

  copy() {
    let temp = [];
    arrayCopy(this.sides, temp);

    return new Config(temp);
  }

  rotateZ() {
    let temp = this.sides[U];
    this.sides[U] = this.sides[R];
    this.sides[R] = this.sides[D];
    this.sides[D] = this.sides[L];
    this.sides[L] = temp;
  }

  rotateY() {
    let temp = this.sides[R];
    this.sides[R] = this.sides[F];
    this.sides[F] = this.sides[L];
    this.sides[L] = this.sides[B];
    this.sides[B] = temp;
  }

  rotateX() {
    let temp = this.sides[F];
    this.sides[F] = this.sides[U];
    this.sides[U] = this.sides[B];
    this.sides[B] = this.sides[D];
    this.sides[D] = temp;
  }
}

class Index {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

let order = [
  new Index(0, 0),
  new Index(1, 0),
  new Index(2, 0),
  new Index(2, 1),
  new Index(2, 2),
  new Index(1, 2),
  new Index(0, 2),
  new Index(0, 1),
];

function turnZ(zIndex) {
  let configs = [];

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;
    qb[a][b][zIndex].config.rotateZ();
    configs.push(qb[a][b][zIndex].config.copy());
  }

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    // if (!clockwise) {
    //   qb[a][b][zIndex].config = configs[(i + order.length - 2) % order.length];
    // } else {
    qb[a][b][zIndex].config = configs[(i + 2) % order.length];
    // }
  }
}

function turnY(yIndex) {
  let configs = [];

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;
    qb[a][yIndex][b].config.rotateY();
    configs.push(qb[a][yIndex][b].config.copy());
  }

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    // if (!clockwise) {
    //   qb[a][yIndex][b].config = configs[(i + order.length - 2) % order.length];
    // } else {
    qb[a][yIndex][b].config = configs[(i + 2) % order.length];
    // }
  }
}

function turnX(xIndex) {
  let configs = [];

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;
    qb[xIndex][a][b].config.rotateX();
    configs.push(qb[xIndex][a][b].config.copy());
  }

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    // if (!clockwise) {
    //   qb[xIndex][a][b].config = configs[(i + order.length - 2) % order.length];
    // } else {
    qb[xIndex][a][b].config = configs[(i + 2) % order.length];
    // }
  }
}
