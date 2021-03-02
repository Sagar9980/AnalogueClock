let digitalClock = document.querySelector(".digital-clock");
let hrs = document.querySelector(".hr");
let mins = document.querySelector(".min");
let secs = document.querySelector(".sec");
let deg = 6;

setInterval(() => {
  let time = new Date();

  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (hr > 12) hr = hr - 12;
  if (hrs == 0) hr = 12;
  if (hrs < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  digitalClock.innerHTML = hr + " : " + min + " : " + sec;

  let hh = time.getHours() * 30;
  let mm = time.getMinutes() * deg;
  let ss = time.getSeconds() * deg;

  hrs.style.transform = `rotatez(${hh + mm / 12}deg)`;
  mins.style.transform = `rotatez(${mm + ss / 60}deg)`;
  secs.style.transform = `rotatez(${ss}deg)`;
}, 1000);
