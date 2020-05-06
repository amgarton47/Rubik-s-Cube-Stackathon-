const CANVAS_HEIGHT = window.innerHeight * 0.95;
const CANVAS_WIDTH = window.innerWidth * 0.95;

const SCRAMBLE_LENGTH = 15;

const MOVES = {
  DOWN: new Move(0, 1, 0, 1),
  DOWNP: new Move(0, 1, 0, -1),
  UP: new Move(0, -1, 0, -1),
  UPP: new Move(0, -1, 0, 1),
  FRONT: new Move(0, 0, 1, 1),
  FRONTP: new Move(0, 0, 1, -1),
  BACK: new Move(0, 0, -1, -1),
  BACKP: new Move(0, 0, -1, 1),
  RIGHT: new Move(1, 0, 0, 1),
  RIGHTP: new Move(1, 0, 0, -1),
  LEFT: new Move(-1, 0, 0, -1),
  LEFTP: new Move(-1, 0, 0, 1),
};

let cube;
let currentMove = new Move(0, 1, 0, 1);

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
  cube = new Cube(3);
}

let x = -0.4;
let y = -0.4;

function draw() {
  background(50, 51, 51);
  rotateX(x);
  rotateY(y);
  cube.display();
  currentMove.update();
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
      currentMove = MOVES.FRONTP;
      currentMove.start();
      break;
    case "F":
      currentMove = MOVES.FRONT;
      currentMove.start();
      break;
    case "b":
      currentMove = MOVES.BACKP;
      currentMove.start();
      break;
    case "B":
      currentMove = MOVES.BACK;
      currentMove.start();
      break;

    // U and D
    case "u":
      currentMove = MOVES.UPP;
      currentMove.start();
      break;
    case "U":
      currentMove = MOVES.UP;
      currentMove.start();
      break;
    case "d":
      currentMove = MOVES.DOWNP;
      currentMove.start();
      break;
    case "D":
      currentMove = MOVES.DOWN;
      currentMove.start();
      break;

    // R and L
    case "r":
      currentMove = MOVES.RIGHTP;
      currentMove.start();
      break;
    case "R":
      currentMove = MOVES.RIGHT;
      currentMove.start();
      break;
    case "l":
      currentMove = MOVES.LEFTP;
      currentMove.start();
      break;
    case "L":
      currentMove = MOVES.LEFT;
      currentMove.start();
      break;

    // Middle layer slices
    case "s":
      turnZ(0, false);
      break;
    case "S":
      turnZ(0, true);
      break;
    case "E":
      turnY(0, false);
      break;
    case "e":
      turnY(0, true);
      break;
    case "M":
      turnX(0, false);
      break;
    case "m":
      turnX(0, true);
      break;
    case " ":
      scramble();
  }
}

let scrambleElement = document.getElementsByClassName("a")[0];

let scrambleMoves = [];

function scramble() {
  randomMove();
  setIntervalX(randomMove, 850, SCRAMBLE_LENGTH - 1);
}

function randomMove() {
  let keys = Object.keys(MOVES);
  currentMove = MOVES[keys[(keys.length * Math.random()) << 0]];
  scrambleMoves.push(currentMove);
  currentMove.start();
  console.log(scrambleMoves);
  console.log(scrambleElement);
}

function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = setInterval(function () {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}
