const CANVAS_HEIGHT = window.innerHeight - 50;
const CANVAS_WIDTH = window.innerWidth - 100;

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
}

function draw() {
  background(158, 163, 149);
  rotateX(-0.25);
  rotateY(-0.3);
  cube.display();
}
