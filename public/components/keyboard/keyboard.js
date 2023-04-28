import { EXCEPTIONS, KEYMAP } from '../../data/data';

export default class Keyboard {
  constructor() {
    this.keyboardElem = document.createElement('div');
    this.keys = this.keyboardElem.children;
    this.isCaps = false;
    this.currentLang = 0;
  }

  getKey(keyName, keyLocation) {
    const searchedKey = keyName.toLowerCase();
    let temp;
    let backup;

    [...this.keys].find((key) => {
      const currKeyLocation = key.dataset.key?.toLowerCase()?.slice(-1);
      const currKeyData = key.dataset.key?.toLowerCase().replace(/-\d/, '');
      const currKey = key.textContent.toLowerCase();

      if (currKeyData === searchedKey && +currKeyLocation === +keyLocation) temp = key;
      if (currKey === searchedKey || currKeyData === searchedKey) backup = key;

      return false;
    });

    return temp || backup;
  }

  renderKeys(keyMap) {
    this.keyboardElem.innerHTML = '';
    const doubles = new Set();

    for (let i = 0, len = keyMap.length; i < len; i += 1) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.textContent = this.isCaps && keyMap[i].length === 1 ? keyMap[i].toUpperCase() : keyMap[i];

      if (EXCEPTIONS.has(keyMap[i])) {
        const [[keyDataLeft, keyDataRight], keyClass] = EXCEPTIONS.get(keyMap[i]);
        const data = doubles.has(keyMap[i]) ? keyDataRight : keyDataLeft;

        keyClass && key.classList.add(keyClass);
        data && key.setAttribute('data-key', data);

        doubles.add(keyMap[i]);
      }

      this.keyboardElem.append(key);
    }
  }

  #initializeKeyboard() {
    this.keyboardElem.classList.add('keyboard');
    this.renderKeys(KEYMAP[this.currentLang]);
    return this.keyboardElem;
  }

  render(keys) {
    return this.#initializeKeyboard(keys);
  }
}
