import { EXCEPTIONS, KEYMAP } from '../../data/data';

export default class Keyboard {
  constructor() {
    this.keyboardElem = document.createElement('div');
    this.keys = this.keyboardElem.children;
    this.isCaps = false;
    this.currentKeys = KEYMAP[0];
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

  #initializeKeyboard() {
    const doubles = new Set();
    this.keyboardElem.classList.add('keyboard');

    for (let i = 0, len = this.currentKeys.length; i < len; i += 1) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.textContent = this.currentKeys[i];

      if (EXCEPTIONS.has(this.currentKeys[i])) {
        const [[keyDataLeft, keyDataRight], keyClass] = EXCEPTIONS.get(this.currentKeys[i]);
        const data = doubles.has(this.currentKeys[i]) ? keyDataRight : keyDataLeft;

        keyClass && key.classList.add(keyClass);
        data && key.setAttribute('data-key', data);

        doubles.add(this.currentKeys[i]);
      }

      this.keyboardElem.append(key);
    }

    return this.keyboardElem;
  }

  render(keys) {
    return this.#initializeKeyboard(keys);
  }
}
