let animating = false;
let dir = 0;

let angle = 0;
let finished = false;

class Move {
  constructor(x, y, z, dir) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dir = dir;
    this.angle = angle;
    if (dir === -1) {
      this.CW = false;
    } else {
      this.CW = true;
    }
  }

  start() {
    animating = true;
  }

  update() {
    if (animating) {
      angle += this.dir * 0.04;

      if (Math.abs(angle) > HALF_PI) {
        angle = 0;
        animating = false;

        if (Math.abs(this.z) > 0) {
          turnZ(this.z, this.CW);
        } else if (Math.abs(this.x) > 0) {
          turnX(this.x, this.CW);
        } else if (Math.abs(this.y) > 0) {
          turnY(this.y, !this.CW);
        }
      }
    }
  }

  finished() {
    return finished;
  }
}
