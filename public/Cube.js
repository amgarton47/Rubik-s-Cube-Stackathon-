const CUBIE_SIZE = 40;
let arr = [];

// colors

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

          const qb = new Cubie(x, y, z, CUBIE_SIZE);

          arr.push(qb);
        }
      }
    }

    console.log(arr);
  }

  display() {
    arr.forEach(c => {
      if (c.vector.x == -40 && c.vector.y == -40 && c.vector.z == -40) {
        fill(COLORS.red);
        return c.display();
      }
      fill(255);
      return c.display();
    });
  }
}
