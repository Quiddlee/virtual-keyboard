export default class Keyboard {
  constructor() {
    this.keyboardElem = document.createElement('div');
    this.keys = this.keyboardElem.children;
  }

  getKey(keyName) {
    return [...this.keys].find((key) => {
      if (key.textContent.toLowerCase() === keyName.toLowerCase()) return key;
      return false;
    });
  }

  #initializeKeyboard(keys) {
    this.keyboardElem.classList.add('keyboard');

    for (let i = 0, leng = keys.length; i < leng; i += 1) {
      const key = document.createElement('div');

      if (keys[i] === ' ') key.classList.add('space');
      if (keys[i] === 'Shift') key.classList.add('shift');
      if (keys[i] === 'Ctrl') key.classList.add('ctrl');
      if (keys[i] === 'Win') key.classList.add('win');
      if (keys[i] === '▲' || keys[i] === '►' || keys[i] === '▼' || keys[i] === '◄') key.classList.add('arrow');

      key.classList.add('key');
      key.textContent = keys[i];
      this.keyboardElem.append(key);
    }

    return this.keyboardElem;
  }

  render(keys) {
    return this.#initializeKeyboard(keys);
  }
}
