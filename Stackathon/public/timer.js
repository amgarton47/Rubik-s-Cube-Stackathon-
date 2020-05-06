let mins = 0;
let secs = 0;
let milisecs = 0;
let times = [];
let start;
let existsTimer = false;
let green = false;
const timesList = document.getElementById("timesList");

function timer() {
  milisecs++;

  if (milisecs / 100 === 1) {
    milisecs = 0;
    secs++;

    if (secs / 60 === 1) {
      secs = 0;
      mins++;
    }
  }

  document.getElementById("display").innerHTML =
    mins + ":" + secs + ":" + milisecs;
}

function killTimer() {
  let time = document.getElementById("display").innerHTML;
  mins = 0;
  secs = 0;
  milisecs = 0;
  times.push(` ${time}`);
  let li = document.createElement("li");
  li.innerHTML = time;
  timesList.appendChild(li);
  clearInterval(start);
  existsTimer = false;
}

document.body.onkeyup = function (e) {
  if (e.keyCode == 49) {
    if (existsTimer) {
      killTimer();
    } else {
      start = setInterval(timer, 10);
      existsTimer = true;
    }
    green = false;
  }
};

document.body.onkeydown = function (e) {
  if (e.keyCode == 49) {
    if (!green) {
      document.getElementById("display").classList.toggle("green");
      green = true;
    }
  }
};
