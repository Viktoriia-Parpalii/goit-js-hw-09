import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', resultOfPromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function resultOfPromises(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;

  const valueAmount = Number(amount.value);
  const valueStep = Number(step.value);
  let valueDelay = Number(delay.value);

  for (let i = 1; i <= valueAmount; i += 1) {
    createPromise(i, valueDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    valueDelay += valueStep;
  }
}
