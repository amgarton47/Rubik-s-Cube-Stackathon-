// const Cubie = require("./Cubie");

const CANVAS_HEIGHT = window.innerHeight - 50;
const CANVAS_WIDTH = window.innerWidth - 100;

// let a = window.innerHeight;
// console.log(a);
// let c = new Cubie(10, 18, 100, 100);

let arr = [];

for (let i = -1; i < 2; i++) {
  for (let j = -1; j < 2; j++) {
    for (let k = -1; k < 2; k++) {
      arr.push(new Cubie(i * 30, j * 30, k * 30, 30));
    }
  }
}

console.log(arr);
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);

  // necessary for Easy cam in p5.js
  // ---------------------------------------------------------
  Dw.EasyCam.prototype.apply = function (n) {
    var o = this.cam;
    (n = n || o.renderer),
      n &&
        ((this.camEYE = this.getPosition(this.camEYE)),
        (this.camLAT = this.getCenter(this.camLAT)),
        (this.camRUP = this.getUpVector(this.camRUP)),
        n._curCamera.camera(
          this.camEYE[0],
          this.camEYE[1],
          this.camEYE[2],
          this.camLAT[0],
          this.camLAT[1],
          this.camLAT[2],
          this.camRUP[0],
          this.camRUP[1],
          this.camRUP[2]
        ));
  };
  // ---------------------------------------------------------

  background(0, 0, 255);
  createEasyCam();
}

function draw() {
  background(158, 163, 149);
  arr.forEach(c => c.display());
}
