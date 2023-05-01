import KeyStates from './key-states';
import { KEYIDS } from '../../data/data';

export default class KeyPressHandler extends KeyStates {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.textareaElem = document.querySelector('#textarea');
    this.keys = this.keyboardElem.children;
  }

  handleTextarea = (key) => {
    this.textareaElem.focus();

    if (key.length === 1) {
      this.textareaElem.value += key;
    }

    if (key === 'Backspace') {
      this.textareaElem.value = this.textareaElem.value.slice(0, -1);
    }

    if (key === 'Enter') {
      this.textareaElem.value += '\n';
    }
  };

  createAnimationWave = (reversed = false) => {
    const keyLayer = document.createElement('span');

    keyLayer.classList.add('key__layer', `key__layer--active${reversed ? '-rev' : ''}`);
    keyLayer.onanimationend = () => keyLayer.remove();

    return keyLayer;
  };

  checkCaps(pressedKey, capsElem) {
    if (pressedKey !== 'CapsLock' && pressedKey.id !== 'capslock') return;

    this.isCaps = !this.isCaps;
    if (this.isCaps) capsElem.classList.add('active');

    if (!this.isCaps) {
      const wave = this.createAnimationWave(true);

      capsElem.innerHTML = capsElem.textContent;
      capsElem.append(wave);
      capsElem.classList.remove('active');
    }

    this.toggleCaps();
  }

  keyPress = (evt, downOrUp = true) => {
    if (!KEYIDS.includes(evt.code.toLowerCase())) return;
    evt.preventDefault();

    const pressedKey = evt.code;
    const keyElem = this.getKey(pressedKey);
    const wave = this.createAnimationWave();

    if (downOrUp) {
      this.handleTextarea(keyElem.textContent);

      keyElem.classList.add('active');

      if (evt.repeat) return;

      keyElem.append(wave);
      this.checkCaps(pressedKey, keyElem);
    } else if (!downOrUp && pressedKey !== 'CapsLock') {
      keyElem.classList.remove('active');
    }

    this.switchKeysLang(evt);

    if (((evt?.shiftKey && !this.isShift)
        || (!evt?.shiftKey && this.isShift))) this.toggleShift(evt);
  };

  mousePress = (evt, downOrUp = true) => {
    if (!evt.target.classList.contains('key')) return;

    const pressedKey = evt.target;
    const keyElem = this.getKey(pressedKey.id);
    const wave = this.createAnimationWave();

    if (downOrUp) {
      document.body.onmouseup = () => this.mousePress(evt, false);

      this.handleTextarea(keyElem.textContent);
      keyElem?.classList.add('active');

      if (evt.repeat) return;

      keyElem.append(wave);
      this.checkCaps(pressedKey, keyElem);
    } else if (!downOrUp && pressedKey.id !== 'capslock') {
      keyElem?.classList.remove('active');
    }

    if ((pressedKey.textContent === 'Shift' && !this.isShift)
        || (pressedKey.textContent === 'Shift' && this.isShift)) this.toggleShift();
  };
}
