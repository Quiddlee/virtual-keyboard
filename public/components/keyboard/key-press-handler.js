import KeyStates from './key-states';

export default class KeyPressHandler extends KeyStates {
  constructor() {
    super();
    this.keyboardElem = document.querySelector('.keyboard');
    this.keys = this.keyboardElem.children;
  }

  checkCaps(evt) {
    const currCapsState = evt.getModifierState('CapsLock');
    const capsKey = this.getKey('CapsLock')?.classList;

    if (currCapsState) capsKey.add('active');
    else capsKey.remove('active');

    if (currCapsState === this.isCaps) return;

    this.isCaps = currCapsState;
    this.toggleCaps();
  }

  keyPress = (evt, downOrUp = true) => {
    evt.preventDefault();

    const pressedKey = evt.key;
    const keyLocation = evt.location;
    const keyElem = this.getKey(pressedKey, keyLocation)?.classList;

    if (downOrUp) keyElem?.add('active');
    else keyElem?.remove('active');

    if (evt.altKey && evt.ctrlKey) this.switchKeysLang();

    this.checkCaps(evt);
    if ((evt.shiftKey && !this.isShift) || (!evt.shiftKey && this.isShift)) this.toggleShift();

    if (this.isCaps && this.isShift) {
      this.isCaps = false;
      this.toggleCaps();
    } else if (this.isCaps || this.isShift) {
      this.isCaps = true;
      this.toggleCaps();
    }
  };
}
