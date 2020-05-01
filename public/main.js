const CANVAS_HEIGHT = window.innerHeight * 0.95;
const CANVAS_WIDTH = window.innerWidth * 0.95;

let cube = new Cube(3);

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

  createEasyCam();
  // turnZ();
}

let x = -0.4;
let y = -0.4;

function draw() {
  background(50, 51, 51);
  rotateX(x);
  rotateY(y);
  cube.display();
}

function keyPressed() {
  switch (keyCode) {
    case DOWN_ARROW:
      x -= 0.4;
      break;
    case UP_ARROW:
      x += 0.4;
      break;
    case LEFT_ARROW:
      y -= 0.4;
      break;
    case RIGHT_ARROW:
      y += 0.4;
      break;
  }

  switch (key) {
    // F and B
    case "f":
      turnZ(2);
      break;
    case "F":
      turnZ(2);
      turnZ(2);
      turnZ(2);
      break;
    case "b":
      turnZ(0);
      turnZ(0);
      turnZ(0);
      break;
    case "B":
      turnZ(0);
      break;

    // U and D
    case "u":
      turnY(0);
      break;
    case "U":
      turnY(0);
      turnY(0);
      turnY(0);
      break;
    case "d":
      turnY(2);
      turnY(2);
      turnY(2);
      break;
    case "D":
      turnY(2);
      break;

    // R and L
    case "r":
      turnX(2);
      break;
    case "R":
      turnX(2);
      turnX(2);
      turnX(2);
      break;
    case "l":
      turnX(0);
      turnX(0);
      turnX(0);
      break;
    case "L":
      turnX(0);
      break;

    // Middle layer slices
    case "z":
      turnZ(1);
      break;
    case "y":
      turnY(1);
      break;
    case "x":
      turnX(1);
      break;
  }
}
