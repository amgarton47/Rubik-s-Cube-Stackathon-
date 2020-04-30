const CUBIE_SIZE = 40;
let arr = [];

class Cube {
  constructor(dim) {
    for (let i = 0; i < dim; i++) {
      for (let j = 0; j < dim; j++) {
        for (let k = 0; k < dim; k++) {
          // offset sets cube to center relative to easy cam
          const offset = (dim - 1) * CUBIE_SIZE * 0.5;
          const x = i * CUBIE_SIZE - offset;
          const y = j * CUBIE_SIZE - offset;
          const z = k * CUBIE_SIZE - offset;

          arr.push(new Cubie(x, y, z, CUBIE_SIZE));
        }
      }
    }
  }

  display() {
    arr.forEach(c => c.display());
  }
}
