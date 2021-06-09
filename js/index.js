let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
let countDownDate = new Date("July 1, 2021 15:37:25").getTime();
