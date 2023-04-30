import { EXCEPTIONS, KEYMAP } from '../../data/data';

export default class Keyboard {
  constructor() {
    this.keyboardElem = document.createElement('div');
    this.keys = this.keyboardElem.children;
    this.isCaps = false;
    this.isShift = false;
    this.currentLang = +localStorage.getItem('currentLang') || 0;
  }

  getKey(keyName) {
    const searchedKey = keyName.toLowerCase();

    return [...this.keys].find((key) => {
      const currKeyData = key.dataset.key?.toLowerCase();
      const currKey = key.textContent.toLowerCase();

      if (currKey === searchedKey || currKeyData === searchedKey) return key;

      return false;
    });
  }

  renderKeys(keyMap) {
    this.keyboardElem.innerHTML = '';
    const doubles = new Set();

    for (let i = 0, len = keyMap.length; i < len; i += 1) {
      const key = document.createElement('div');
      const keyContent = keyMap[i];

      key.classList.add('key');
      key.textContent = this.isCaps && keyContent.length === 1 ? keyContent.toUpperCase() : keyContent;

      if (EXCEPTIONS.has(keyContent)) {
        const [[keyDataLeft, keyDataRight], keyClass] = EXCEPTIONS.get(keyContent);
        const data = doubles.has(keyContent) ? keyDataRight : keyDataLeft;

        keyClass && key.classList.add(keyClass);
        data && key.setAttribute('data-key', data);

        doubles.add(keyContent);
      }

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
