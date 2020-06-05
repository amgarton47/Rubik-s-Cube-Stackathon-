const LANGUAGE = navigator.language || "en-US";

const ENABLE_LISTEN_BTN = document.getElementById("btn");

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

let speech = new p5.SpeechRec(LANGUAGE, logSpeech);

let continuous = true;
let interim = false;

ENABLE_LISTEN_BTN.addEventListener("click", () => {
  speech.start(continuous, interim);
});
