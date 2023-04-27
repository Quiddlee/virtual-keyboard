import KeysStates from './keys-states';

export default class KeyPressHandler extends KeysStates {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.keys = this.keyboardElem.children;
  }

  checkCaps(evt) {
    const getCaps = evt.getModifierState('CapsLock');
    const capsKey = this.getKey('CapsLock')?.classList;

    if (getCaps) capsKey.add('active');
    else capsKey.remove('active');

    if (getCaps !== this.isCaps) {
      this.isCaps = getCaps;
      this.changeCapsKeys();
    }
  }

  keyPress = (evt, downOrUp = true) => {
    evt.preventDefault();

    const keyPressed = evt.key;
    const keyLocation = evt.location;
    const key = this.getKey(keyPressed, keyLocation)?.classList;

    if (downOrUp) key?.add('active');
    else key?.remove('active');

    this.checkCaps(evt);
  };
}
