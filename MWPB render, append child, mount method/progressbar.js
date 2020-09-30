class ProgressBar {
    constructor(value) {
      this.value = value;
    }
  
    increment() {
      if (this.value < 10) {
        this.value += 1;
      }
  
      this.update();
    }
  
    decrement() {
      if (this.value > 0) {
        this.value -= 1;
      }
  
      this.update();
    }
  
    render() {
      const element = document.createElement('div');
      element.className = 'progress-bar';
      element.innerHTML = `
        <div class="label">
          <span class="counter"></span>/<span class="maximum">10</span>
        </div>
        <div class="progress">
          <div class="btn-minus"></div>
          <div class="bar">
            <div class="knob"></div>
          </div>
          <div class="btn-plus"></div>
        </div>
      `;
  
      const btnPlus = element.querySelector('.btn-plus');
      btnPlus.addEventListener('click', () => this.increment());
  
      const btnMinus = element.querySelector('.btn-minus');
      btnMinus.addEventListener('click', () => this.decrement());
  
      return element;
    }
  
    mount(parent) {
      this.element = this.render();
      parent.appendChild(this.element);
      this.update();
    }
  
    update() {
      const counterElm = this.element.querySelector('.counter');
      counterElm.textContent = this.value;
      const knobElm = this.element.querySelector('.knob');
      knobElm.style.width = `${this.value * 10}%`;
    }
  }