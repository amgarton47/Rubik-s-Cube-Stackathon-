class Cubie {
  constructor(x, y, z, size) {
    this.size = size;
    this.vector = new p5.Vector(x, y, z);
  }

  display() {
    push();
    translate(this.vector.x, this.vector.y, this.vector.z);
    box(this.size);
    pop();
  }
}

// let

// class Cube {
//   constructor(dim) {
//     this.dim = dim;

//     for (let i = 0; i < dim; i++) {
//       for (let j = 0; j < dim; j++) {
//         for (let k = 0; k < dim; k++) {

//         }
//       }
//     }
//   }
// }
