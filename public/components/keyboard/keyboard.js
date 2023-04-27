export default class Keyboard {
  constructor() {
    this.keyboardElem = document.createElement('div');
    this.keys = this.keyboardElem.children;
    this.isCaps = false;
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
    this.keyboardElem.classList.add('keyboard');

    this.keyboardElem.innerHTML = `
      <div class="key">\`</div>
      <div class="key">1</div>
      <div class="key">2</div>
      <div class="key">3</div>
      <div class="key">4</div>
      <div class="key">5</div>
      <div class="key">6</div>
      <div class="key">7</div>
      <div class="key">8</div>
      <div class="key">9</div>
      <div class="key">0</div>
      <div class="key">-</div>
      <div class="key">=</div>
      <div class="key">Backspace</div>
      <div class="key">Tab</div>
      <div class="key">q</div>
      <div class="key">w</div>
      <div class="key">e</div>
      <div class="key">r</div>
      <div class="key">t</div>
      <div class="key">y</div>
      <div class="key">u</div>
      <div class="key">i</div>
      <div class="key">o</div>
      <div class="key">p</div>
      <div class="key">[</div>
      <div class="key">]</div>
      <div class="key">\\</div>
      <div data-key="Delete" class="key">Del</div>
      <div class="caps key">CapsLock</div>
      <div class="key">a</div>
      <div class="key">s</div>
      <div class="key">d</div>
      <div class="key">f</div>
      <div class="key">g</div>
      <div class="key">h</div>
      <div class="key">j</div>
      <div class="key">k</div>
      <div class="key">l</div>
      <div class="key">;</div>
      <div class="key">'</div>
      <div class="enter key">Enter</div>
      <div data-key="Shift-1" class="shift key">Shift</div>
      <div class="key">z</div>
      <div class="key">x</div>
      <div class="key">c</div>
      <div class="key">v</div>
      <div class="key">b</div>
      <div class="key">n</div>
      <div class="key">m</div>
      <div class="key">,</div>
      <div class="key">.</div>
      <div class="key">/</div>
      <div data-key="ArrowUp" class="arrow key">▲</div>
      <div data-key="Shift-2" class="shift key">Shift</div>
      <div data-key="Control-1" class="ctrl key">Ctrl</div>
      <div data-key="Meta" class="win key">Win</div>
      <div data-key="Alt-1" class="key">Alt</div>
      <div data-key=" " class="space key"></div>
      <div data-key="Alt-2" class="key">Alt</div>
      <div data-key="ArrowLeft" class="arrow key">◄</div>
      <div data-key="ArrowDown" class="arrow key">▼</div>
      <div data-key="ArrowRight" class="arrow key">►</div>
      <div data-key="Control-2" class="ctrl key">Ctrl</div>
    `;

    return this.keyboardElem;
  }

  render(keys) {
    return this.#initializeKeyboard(keys);
  }
}
