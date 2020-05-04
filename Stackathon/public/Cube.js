// constants
const CUBIE_SIZE = 40;
const LENGTH = 50;

// global vars
let qb = [];

class Cube {
  constructor(dim) {
    this.dim = dim;

    for (let i = -1; i < 2; i++) {
      qb[i] = [];
      for (let j = -1; j < 2; j++) {
        qb[i][j] = [];
        for (let k = -1; k < 2; k++) {
          const x = LENGTH * i;
          const y = LENGTH * j;
          const z = LENGTH * k;
          qb[i][j][k] = new Cubie(x, y, z, LENGTH);
        }
      }
    }

    // qb[0][0][2].highlight();
  }

  // create cube out of dim * dim * dim cubies
  display() {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        for (let k = -1; k < 2; k++) {
          push();

          if (
            Math.abs(qb[i][j][k].vector.z) > 0 &&
            currentMove.z === qb[i][j][k].vector.z / LENGTH
          ) {
            rotateZ(angle);
          } else if (
            Math.abs(qb[i][j][k].vector.x) > 0 &&
            currentMove.x === qb[i][j][k].vector.x / LENGTH
          ) {
            rotateX(angle);
          } else if (
            Math.abs(qb[i][j][k].vector.y) > 0 &&
            currentMove.y === qb[i][j][k].vector.y / LENGTH
          ) {
            rotateY(angle);
          }

          qb[i][j][k].display();
          pop();
        }
      }
    }
  }
}

function turnX(xIndex, CW) {
  let configs = [];

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    qb[xIndex][a][b].config.rotateX(CW);
    configs.push(qb[xIndex][a][b].config.copy());
  }

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    if (CW) {
      qb[xIndex][a][b].config = configs[(i + order.length - 2) % order.length];
    } else {
      qb[xIndex][a][b].config = configs[(i + 2) % order.length];
    }
  }
}

function turnY(yIndex, CW) {
  let configs = [];

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    qb[a][yIndex][b].config.rotateY(CW);
    configs.push(qb[a][yIndex][b].config.copy());
  }

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    if (CW) {
      qb[a][yIndex][b].config = configs[(i + order.length - 2) % order.length];
    } else {
      qb[a][yIndex][b].config = configs[(i + 2) % order.length];
    }
  }
}

function turnZ(zIndex, CW) {
  let configs = [];

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    qb[a][b][zIndex].config.rotateZ(CW);
    configs.push(qb[a][b][zIndex].config.copy());
  }

  for (let i = 0; i < order.length; i++) {
    const a = order[i].a;
    const b = order[i].b;

    if (CW) {
      qb[a][b][zIndex].config = configs[(i + order.length - 2) % order.length];
    } else {
      qb[a][b][zIndex].config = configs[(i + 2) % order.length];
    }
  }
}
