import Keyboard from './keyboard';

export default class KeyPressHandler extends Keyboard {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.keys = this.keyboardElem.children;
  }

  keyDown = (evt) => {
    evt.preventDefault();

    const keyPressed = evt.key;
    const isCaps = evt.getModifierState('CapsLock');

    // console.log(keyPressed, evt.keyCode, evt.location, isCaps);

    if (isCaps) {
      this.getKey('CapsLock')?.classList.add('active');
    } else {
      this.getKey('CapsLock')?.classList.remove('active');
    }

    this.getKey(keyPressed)?.classList.add('active');
  };

  keyUp = (evt) => {
    const keyPressed = evt.key;
    const isCaps = evt.getModifierState('CapsLock');

    if (isCaps) {
      this.getKey('CapsLock')?.classList.add('active');
    } else {
      this.getKey('CapsLock')?.classList.remove('active');
    }

    // console.log(keyPressed, evt.keyCode, evt.location, isCaps);
    this.getKey(keyPressed)?.classList.remove('active');
  };
}
