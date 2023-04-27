import Keyboard from './keyboard';

export default class KeyPressHandler extends Keyboard {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.keys = this.keyboardElem.children;
  }

  setCaps(evt) {
    const isCaps = evt.getModifierState('CapsLock');

    if (isCaps) {
      this.getKey('CapsLock')?.classList.add('active');
    } else {
      this.getKey('CapsLock')?.classList.remove('active');
    }
  }

  keyPress = (evt, downOrUp = true) => {
    evt.preventDefault();
    const keyPressed = evt.key;
    const keyLocation = evt.location;
    const key = this.getKey(keyPressed, keyLocation)?.classList;

    if (downOrUp) key?.add('active');
    else key?.remove('active');

    this.setCaps(evt);
  };
}
