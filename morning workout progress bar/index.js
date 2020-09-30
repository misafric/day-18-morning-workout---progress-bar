'use strict';

class ProgressBar {
    constructor(value) {
        this.value = value;
    }

    increment () {
        if (this.value < 10) {
            this.value += 1;
        }
    }

    decrement () {
        if (this.value > 0) {
            this.value -= 1;
        }
    }
}

/*let value = 6;*/

const update = (bar) => {
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = value;
  const knobElm = document.querySelector('#knob');
  knobElm.style.width = `${value * 10}%`;
};

const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => {
  if (value < 10) {
    value += 1;
  }

  update();
});

const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
  }

  update();
});

/*update();*/