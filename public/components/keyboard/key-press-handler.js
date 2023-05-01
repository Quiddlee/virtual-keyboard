import KeyStates from './key-states';
import { KEYIDS } from '../../data/data';

export default class KeyPressHandler extends KeyStates {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.keys = this.keyboardElem.children;
  }

  checkCaps(pressedKey) {
    if (pressedKey !== 'CapsLock' && pressedKey.id !== 'capslock') return;

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
    const keyElem = this.getKey(pressedKey)?.classList;

    if (downOrUp) {
      keyElem.add('active');
      this.checkCaps(pressedKey);
    } else if (pressedKey !== 'CapsLock') {
      keyElem.remove('active');
    }

    this.switchKeysLang(evt);

    if (((evt?.shiftKey && !this.isShift)
        || (!evt?.shiftKey && this.isShift))) this.toggleShift(evt);
  };

  mousePress = (evt, downOrUp = true) => {
    if (!evt.target.classList.contains('key')) return;

    const pressedKey = evt.target;
    const keyElem = this.getKey(pressedKey.id)?.classList;

    if (downOrUp) {
      keyElem.add('active');
      this.checkCaps(pressedKey);
    } else if (pressedKey.id !== 'capslock') {
      keyElem.remove('active');
    }

    if ((pressedKey.textContent === 'Shift' && !this.isShift)
        || (pressedKey.textContent === 'Shift' && this.isShift)) this.toggleShift();
  };
}
