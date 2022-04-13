const buttonEl1 = document.querySelector<HTMLButtonElement>('.js-button__1');
const buttonEl2 = document.querySelector<HTMLButtonElement>('.js-button__2');
const buttonEl3 = document.querySelector<HTMLButtonElement>('.js-button__3');
const buttonEl4 = document.querySelector<HTMLButtonElement>('.js-button__4');
const buttonEl5 = document.querySelector<HTMLButtonElement>('.js-button__5');
const buttonEl6 = document.querySelector<HTMLButtonElement>('.js-button__6');
const buttonEl7 = document.querySelector<HTMLButtonElement>('.js-button__7');

const boxEl1 = document.querySelector<HTMLDivElement>('.js-box__1');
const boxEl2 = document.querySelector<HTMLDivElement>('.js-box__2');
const boxEl3 = document.querySelector<HTMLDivElement>('.js-box__3');
const boxEl4 = document.querySelector<HTMLDivElement>('.js-box__4');
const boxEl5 = document.querySelector<HTMLDivElement>('.js-box__5');
const boxEl6 = document.querySelector<HTMLDivElement>('.js-box__6');
const boxEl = document.querySelectorAll<HTMLDivElement>('.js-box');
const containerEl = document.querySelector<HTMLDivElement>('.container');

const inputTextEl = document.querySelector<HTMLInputElement>('.js-input');
const outputEl = document.querySelector<HTMLSpanElement>('.js-output');

buttonEl1.addEventListener('click', () => {
  if (boxEl1.style.backgroundColor === 'turquoise') {
    boxEl1.style.backgroundColor = 'yellow';
  } else {
    boxEl1.style.backgroundColor = 'turquoise';
  }
});

buttonEl2.addEventListener('click', () => {
  if (boxEl2.innerText === 'FAIL') {
    boxEl2.innerText = 'SUCCESS';
  } else {
    boxEl2.innerText = 'FAIL';
  }
});

buttonEl3.addEventListener('click', () => {
  boxEl3.style.display = 'none';
});

buttonEl4.addEventListener('click', () => {
  boxEl4.classList.toggle('hidden');
});

const possibleColors = ['red', 'green', 'blue', 'pink', 'gray'];

buttonEl5.addEventListener('click', () => {
  const colorIndex = Math.floor(Math.random() * 5);
  boxEl5.style.backgroundColor = possibleColors[colorIndex];
});

buttonEl6.addEventListener('click', () => {
  let count = 0;
  const timer = setInterval(() => {
    count++;
    boxEl6.innerText = count.toString();
    if (count === 10) {
      clearInterval(timer);
    }
  }, 200);
});

buttonEl7.addEventListener('click', () => {
  if (containerEl.style.backgroundColor === 'white') {
    containerEl.style.backgroundColor = '#000000';
  } else {
    containerEl.style.backgroundColor = 'white';
  }

  boxEl.forEach((box) => {
    box.style.backgroundColor = '#18D5E1';
  });
});

boxEl1.addEventListener('mouseover', () => {
  boxEl1.style.backgroundColor = 'red';
});

boxEl5.addEventListener('mouseover', () => {
  let count = 0;
  const timer = setInterval(() => {
    count++;
    boxEl5.innerText = count.toString();
    if (count === 10) {
      clearInterval(timer);
    }
  }, 200);
  boxEl5.addEventListener('mouseleave', () => {
    clearInterval(timer);
    boxEl5.innerText = '0';
  });
});

const updateSpan = () => {
  outputEl.innerText = inputTextEl.value;
};

inputTextEl.addEventListener('input', updateSpan);
