const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
let h = new Date();
let s = new Date();
let m = new Date();

setInterval(function () {
  let h = new Date();
  let s = new Date();
  let m = new Date();
  hour.textContent = String(h.getHours()).padStart(2, 0);
  minute.textContent = String(m.getMinutes()).padStart(2, 0);
  second.textContent = String(s.getSeconds()).padStart(2, 0);
}, 1000);
