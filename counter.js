let overs_btn = document.getElementById("overs_btn");
let bolwed_btn = document.getElementById("bolwed_btn");
let ball_btn = document.getElementById("ball_btn");

let over = document.getElementById("overs");
let Bolwed = document.getElementById("bolwed");
let ball = document.getElementById("ball_bolwed");
let run = document.getElementById("run");
let delivery = document.getElementById("delivery");
let total = document.getElementById("total");

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
}

function balls() {
  Ball += 1;
  ball.innerText = Ball;
  Run = Math.floor(Math.random() * 7) + 0;
  run.innerText = Run;
  Del = run.innerText;
  Total +=Run ;
  total.innerText = Total;
  delivery.innerText += Del;
  if (Del == 6) {
    Del = run.innerText = 0;
  }
  if (Ball == 6) {
    overss += 1;
    over.innerText = overss;
    Ball = 0;
    ball.innerText = "over";
  }
}
