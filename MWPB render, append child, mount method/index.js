'use strict';

const bar1 = new ProgressBar(0);
const bar2 = new ProgressBar(4);

const appElm = document.getElementById('app');

bar1.mount(appElm);
bar2.mount(appElm);

// const btnPlus = document.querySelector('#plus');
// btnPlus.addEventListener('click', () => {
//   bar.increment();
//   bar.update();
// });

// const btnMinus = document.querySelector('#minus');
// btnMinus.addEventListener('click', () => {
//   bar.decrement();
//   bar.update();
// });

// update();