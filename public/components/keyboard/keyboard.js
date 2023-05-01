import { KEYIDS, KEYMAP } from '../../data/data';

export default class Keyboard {
  constructor() {
    this.keyboardElem = document.createElement('div');
    this.keys = this.keyboardElem.children;
    this.isCaps = false;
    this.isShift = false;
    this.currentLang = +localStorage.getItem('currentLang') || 0;
    this.doc = document;
  }

  getKey(keyName) {
    return this.doc.getElementById(keyName.toLowerCase());
  }

  renderKeys(keyMap) {
    this.keyboardElem.innerHTML = '';

    for (let i = 0, len = keyMap.length; i < len; i += 1) {
      const key = document.createElement('div');
      const keyContent = keyMap[i];

      key.id = KEYIDS[i];
      key.classList.add('key');
      key.textContent = keyContent;

      this.keyboardElem.append(key);
    }
  }

  #initializeKeyboard() {
    this.keyboardElem.classList.add('keyboard');
    this.renderKeys(KEYMAP[this.currentLang][0]);
    return this.keyboardElem;
  }

  render(keys) {
    return this.#initializeKeyboard(keys);
  }
}
