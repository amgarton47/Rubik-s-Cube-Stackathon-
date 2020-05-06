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

  rotateZ(CW) {
    if (CW) {
      let temp = this.sides[U];
      this.sides[U] = this.sides[L];
      this.sides[L] = this.sides[D];
      this.sides[D] = this.sides[R];
      this.sides[R] = temp;
    } else {
      let temp = this.sides[U];
      this.sides[U] = this.sides[R];
      this.sides[R] = this.sides[D];
      this.sides[D] = this.sides[L];
      this.sides[L] = temp;
    }
  }

  rotateY(CW) {
    if (CW) {
      let temp = this.sides[F];
      this.sides[F] = this.sides[R];
      this.sides[R] = this.sides[B];
      this.sides[B] = this.sides[L];
      this.sides[L] = temp;
    } else {
      let temp = this.sides[R];
      this.sides[R] = this.sides[F];
      this.sides[F] = this.sides[L];
      this.sides[L] = this.sides[B];
      this.sides[B] = temp;
    }
  }

  rotateX(CW) {
    if (CW) {
      let temp = this.sides[U];
      this.sides[U] = this.sides[F];
      this.sides[F] = this.sides[D];
      this.sides[D] = this.sides[B];
      this.sides[B] = temp;
    } else {
      let temp = this.sides[F];
      this.sides[F] = this.sides[U];
      this.sides[U] = this.sides[B];
      this.sides[B] = this.sides[D];
      this.sides[D] = temp;
    }
  }
}

class Index {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// let order = [
//   new Index(0, 0),
//   new Index(1, 0),
//   new Index(2, 0),
//   new Index(2, 1),
//   new Index(2, 2),
//   new Index(1, 2),
//   new Index(0, 2),
//   new Index(0, 1),
// ];

let order = [
  new Index(-1, -1),
  new Index(0, -1),
  new Index(1, -1),
  new Index(1, 0),
  new Index(1, 1),
  new Index(0, 1),
  new Index(-1, 1),
  new Index(-1, 0),
];
