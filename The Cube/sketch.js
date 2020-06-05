// global vars
let cube, cam;

// canvas dimensions adjust on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// initial canvas state
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

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

  // peasy cam
  cam = createEasyCam();
  cam.setDistanceMin(275); // restrict zoom distances
  cam.setDistanceMax(550);

  cube = new Cube(3);
}

// initial cam angle offsets
let x = -0.35;
let y = -0.35;

function draw() {
  background("#24272B");
  rotateX(x);
  rotateY(y);

  cube.display();
  currentMove.update();
}
