import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const myInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const INETRVAL_DELAY = 1000;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};
flatpickr(myInput, options);

startBtn.disabled = true;

startBtn.addEventListener('click', toStartTimer);
function toStartTimer() {
  timerId = setInterval(() => {
    startBtn.disabled = true;
    myInput.disabled = true;
    const currentTime = new Date();
    const deadlineTime = new Date(myInput.value);
    const deltaTime = deadlineTime - currentTime;
    if (deltaTime > 0) {
      const timeComponents = convertMs(deltaTime);

      refs.days.textContent = timeComponents.days;
      refs.hours.textContent = timeComponents.hours;
      refs.minutes.textContent = timeComponents.minutes;
      refs.seconds.textContent = timeComponents.seconds;
    } else {
      clearInterval(timerId);
    }
  }, INETRVAL_DELAY);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
