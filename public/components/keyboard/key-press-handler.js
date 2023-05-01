import KeyStates from './key-states';
import { KEYIDS } from '../../data/data';

export default class KeyPressHandler extends KeyStates {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.keys = this.keyboardElem.children;
  }

  checkCaps(pressedKey, layerOld, capsElem) {
    if (pressedKey !== 'CapsLock' && pressedKey.id !== 'capslock') return;

    this.isCaps = !this.isCaps;

    if (this.isCaps) capsElem.classList.add('active');

    if (!this.isCaps) {
      capsElem.innerHTML = capsElem.textContent;

      const keyLayer = document.createElement('span');

      keyLayer.classList.add('key__layer', 'key__layer--active-rev');
      keyLayer.onanimationend = () => keyLayer.remove();

      capsElem.append(keyLayer);
      capsElem.classList.remove('active');
    }

    this.toggleCaps();
  }

  keyPress = (evt, downOrUp = true) => {
    if (!KEYIDS.includes(evt.code.toLowerCase())) return;
    evt.preventDefault();

    const pressedKey = evt.code;
    const keyElem = this.getKey(pressedKey);
    const keyLayer = document.createElement('span');

    keyLayer.classList.add('key__layer', 'key__layer--active');
    keyLayer.onanimationend = () => keyLayer.remove();

    if (downOrUp) {
      keyElem.classList.add('active');

      if (evt.repeat) return;

      keyElem.append(keyLayer);
      this.checkCaps(pressedKey, keyLayer, keyElem);
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
    const keyLayer = document.createElement('span');

    keyLayer.classList.add('key__layer', 'key__layer--active');
    keyLayer.onanimationend = () => keyLayer.remove();

    if (downOrUp) {
      keyElem?.classList.add('active');
      this.checkCaps(keyLayer);

      if (!evt.repeat) keyElem.append(keyLayer);
    } else if (!downOrUp && pressedKey.id !== 'capslock') {
      keyElem?.classList.remove('active');
    }

    if ((pressedKey.textContent === 'Shift' && !this.isShift)
        || (pressedKey.textContent === 'Shift' && this.isShift)) this.toggleShift();
  };
}
