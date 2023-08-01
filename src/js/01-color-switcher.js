const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const NOTIFICATION_DELAY = 1000;
let timerId = null;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
}
// if (!startBtn.matches('[disabled]'))
timerId = setInterval(changeColor, NOTIFICATION_DELAY);

function stopChangeColor() {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
