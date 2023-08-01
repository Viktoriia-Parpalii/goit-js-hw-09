const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const INETRVAL_DELAY = 1000;
let timerId = null;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  timerId = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    INETRVAL_DELAY
  );
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopChangeColor() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
