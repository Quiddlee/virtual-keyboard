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

  keyDown = (evt) => {
    evt.preventDefault();
    const keyPressed = evt.key;

    console.log(keyPressed, evt.keyCode, evt.location);

    this.getKey(keyPressed)?.classList.add('active');
    this.setCaps(evt);
  };

  keyUp = (evt) => {
    const keyPressed = evt.key;
    console.log(keyPressed, evt.keyCode, evt.location);

    this.getKey(keyPressed)?.classList.remove('active');
    this.setCaps(evt);
  };
}
