import Keyboard from './keyboard';

export default class KeysStates extends Keyboard {
  changeCaps() {
    [...this.keys].forEach((key) => {
      const currKey = key.textContent;

      if (currKey.length === 1) {
        key.textContent = this.isCaps
          ? currKey.toUpperCase()
          : currKey.toLowerCase();
      }
    });
  }
}
