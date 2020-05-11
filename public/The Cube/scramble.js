const SCRAMBLE_LENGTH = 10;

let scrambleMoves = [];
let scrambleKeys = [];

const scrambleElement = document.getElementById("scramble");

function scramble() {
  randomMove();
  setIntervalX(randomMove, 850, SCRAMBLE_LENGTH - 1);
}

function randomMove() {
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
