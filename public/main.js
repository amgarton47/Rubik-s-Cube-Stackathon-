const CANVAS_HEIGHT = window.innerHeight * 0.95;
const CANVAS_WIDTH = window.innerWidth * 0.95;

const SCRAMBLE_LENGTH = 10;

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
let cam;

let speech;

let lang = navigator.language || "en-US";

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  // let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);
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

  speech = new p5.SpeechRec(lang, logSpeech);

  function logSpeech() {
    console.log(speech.resultString);
    let result = speech.resultString;

    if (result.toLowerCase() === "up") {
      currentMove = MOVES["UP"];
      currentMove.start();
    } else if (result.toLowerCase() === "right") {
      currentMove = MOVES["RIGHT"];
      currentMove.start();
    } else if (result.toLowerCase() === "left") {
      currentMove = MOVES["LEFT"];
      currentMove.start();
    }
  }

  let continuous = true;
  let interim = false;

  speech.start(continuous, interim);
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

let scrambleMoves = [];
let scrambleKeys = [];

const MOVES_KEYS = [
  "UP",
  "UPP",
  "DOWN",
  "DOWNP",
  "FRONT",
  "FRONTP",
  "BACK",
  "BACKP",
  "RIGHT",
  "RIGHTP",
  "LEFT",
  "LEFTP",
];

const scrambleElement = document.getElementById("scramble");

function scramble() {
  randomMove();
  setIntervalX(randomMove, 850, SCRAMBLE_LENGTH - 1);
}

function randomMove() {
  // let keys = Object.keys(MOVES);
  // currentMove = MOVES[keys[(keys.length * Math.random()) << 0]];
  // scrambleMoves.push(currentMove);
  // currentMove.start();
  // console.log(scrambleMoves);
  // console.log(scrambleElement);

  let r = Math.floor(Math.random() * MOVES_KEYS.length);
  let key = MOVES_KEYS[r];
  let m = MOVES[key];
  scrambleMoves.push(m);
  scrambleKeys.push(key);
  currentMove = m;
  currentMove.start();
  scrambleElement.innerHTML += ` ${translator(key)} `;
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

function translator(moveKey) {
  switch (moveKey) {
    case "UP":
      return "U";
    case "UPP":
      return "U'";
    case "DOWN":
      return "D";
    case "DOWNP":
      return "D'";
    case "RIGHT":
      return "R";
    case "RIGHTP":
      return "R'";
    case "LEFT":
      return "L";
    case "LEFTP":
      return "L";
    case "BACK":
      return "B";
    case "BACKP":
      return "B'";
    case "FRONT":
      return "F";
    case "FRONTP":
      return "F'";
  }
}

// let btn = createButton("enable microphone commands");
