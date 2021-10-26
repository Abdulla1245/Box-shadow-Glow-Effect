const counter = document.querySelector(".count");

let count = 0;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 10);
