let overs_btn = document.getElementById("overs_btn");
let bolwed_btn = document.getElementById("bolwed_btn");
let ball_btn = document.getElementById("ball_btn");
let reset_btn = document.getElementById("retset_btn");
let over = document.getElementById("overs");
let Bolwed = document.getElementById("bolwed");
let ball = document.getElementById("ball_bolwed");
let run = document.getElementById("run");
let delivery = document.getElementById("delivery");
let total = document.getElementById("total");
let resett = document.getElementById("reset");
let overss = 0;
let bolweds = 0;
let Ball = 0;
let Run = 0;
let Del = 0;
let Total = 0;
function overs() {
  //   overss += 1;
  //   over.innerText = overss;
  //   if (overss == 20) {
  //     overss = 0;
  //     over.innerText = "innings done";
  //   }
}

function bolwed() {
  bolweds += 1;
  Bolwed.innerText = bolweds;
  if (bolweds >= 10) {
    bolweds = 0;
    Bolwed.innerText = "all out";
  }
  if (Del == 6) {
    delivery.innerText = 0;
  }
}

function balls() {
  Ball += 1;
  ball.innerText = Ball;
  Run = Math.floor(Math.random() * 7) + 0;
  run.innerText = Run;
  Del = run.innerText;
  Total += Run;
  total.innerText = Total;
  delivery.innerText += Run;

  if (Ball == 6) {
    overss += 1;
    over.innerText = overss;
    Ball = 0;
    // Del = run.innerText = 0;
    ball.innerText = "over";
  }
}

function reset() {
  over.innerText = 0;
  Bolwed.innerText = 0;
  ball.innerText = 0;
  run.innerText = 0;
  delivery.innerText = 0;
  total.innerText = 0;
}
