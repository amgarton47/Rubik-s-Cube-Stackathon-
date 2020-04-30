const CUBIE_SIZE = 40;
let arr = [];
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
          const offset = (dim - 1) * len * 0.5;
          const x = len * i - offset;
          const y = len * j - offset;
          const z = len * k - offset;
          qb[i][j][k] = new Cubie(x, y, z, len);
        }
      }
    }

    // qb[0][0][2].highlight();
  }

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
