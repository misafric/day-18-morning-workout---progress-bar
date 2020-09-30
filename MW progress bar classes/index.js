'use strict';

const bar = new ProgressBar(0);

const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => {
  bar.increment();
  bar.update();
});

const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', () => {
  bar.decrement();
  bar.update();
});

// update();