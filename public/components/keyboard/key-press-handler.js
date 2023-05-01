import KeyStates from './key-states';
import { KEYIDS } from '../../data/data';

export default class KeyPressHandler extends KeyStates {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.keys = this.keyboardElem.children;
  }

  checkCaps(pressedKey, keyLayer) {
    if (pressedKey !== 'CapsLock' && pressedKey.id !== 'capslock') return;

    keyLayer.onanimationend = () => {
      keyLayer.classList.remove('key__layer--active');
    };

    const capsKey = this.getKey('capslock').classList;
    this.isCaps = !this.isCaps;

    if (this.isCaps) capsKey.add('active');
    else capsKey.remove('active');

    this.toggleCaps();
  }

  keyPress = (evt, downOrUp = true) => {
    if (!KEYIDS.includes(evt.code.toLowerCase())) return;
    evt.preventDefault();

    const pressedKey = evt.code;
    const keyElem = this.getKey(pressedKey);
    const keyLayer = keyElem.firstElementChild;

    if (downOrUp) {
      keyElem.classList.add('active');
      this.checkCaps(pressedKey, keyLayer);

      keyLayer.classList.add('key__layer--active');
    } else if (!downOrUp && pressedKey !== 'CapsLock') {
      keyElem.classList.remove('active');

      keyLayer.onanimationend = () => {
        keyLayer.classList.remove('key__layer--active');
      };
    }

    this.switchKeysLang(evt);

    if (((evt?.shiftKey && !this.isShift)
        || (!evt?.shiftKey && this.isShift))) this.toggleShift(evt);
  };

  mousePress = (evt, downOrUp = true) => {
    if (!evt.target.classList.contains('key')) return;

    const pressedKey = evt.target;
    const keyElem = this.getKey(pressedKey.id);
    const keyLayer = keyElem.firstElementChild;

    if (downOrUp) {
      keyElem?.classList.add('active');
      this.checkCaps(keyLayer);

      keyLayer.classList.add('key__layer--active');
    } else if (!downOrUp && pressedKey.id !== 'capslock') {
      keyElem?.classList.remove('active');

      keyLayer.onanimationend = () => {
        keyLayer.classList.remove('key__layer--active');
      };
    }

    if ((pressedKey.textContent === 'Shift' && !this.isShift)
        || (pressedKey.textContent === 'Shift' && this.isShift)) this.toggleShift();
  };
}
