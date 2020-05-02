// constants
const CUBIE_SIZE = 40;

// global vars
let qb = [];

class Cube {
  constructor(dim) {
    this.dim = dim;

    for (let i = 0; i < dim; i++) {
      qb[i] = [];
      for (let j = 0; j < dim; j++) {
        qb[i][j] = [];
        for (let k = 0; k < dim; k++) {
          const len = 50;
          const x = len * i - len;
          const y = len * j - len;
          const z = len * k - len;
          qb[i][j][k] = new Cubie(x, y, z, len);
        }
      }
    }

    // qb[0][0][2].highlight();
  }

  // create cube out of dim * dim * dim cubies
  display() {
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        for (let k = 0; k < this.dim; k++) {
          qb[i][j][k].display();
        }
      }
    }
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

    qb[xIndex][a][b].config = configs[(i + 2) % order.length];
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

    qb[a][yIndex][b].config = configs[(i + 2) % order.length];
  }
}

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

    qb[a][b][zIndex].config = configs[(i + 2) % order.length];
  }
}
