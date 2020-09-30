class ProgressBar {
    constructor(value) {
      this.value = value;
    }
  
    increment() {
      if (this.value < 10) {
        this.value += 1;
      }
    }
  
    decrement() {
      if (this.value > 0) {
        this.value -= 1;
      }
    }
  
    update() {
      const counterElm = document.querySelector('#counter');
      counterElm.textContent = this.value;
      const knobElm = document.querySelector('#knob');
      knobElm.style.width = `${this.value * 10}%`;
    }
  }