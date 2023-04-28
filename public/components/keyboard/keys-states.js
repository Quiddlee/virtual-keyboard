import Keyboard from './keyboard';
import { KEYMAP } from '../../data/data';

export default class KeysStates extends Keyboard {
  changeCapsKeys() {
    [...this.keys].forEach((key) => {
      const currKey = key.textContent;

      if (currKey.length === 1) {
        key.textContent = this.isCaps
          ? currKey.toUpperCase()
          : currKey.toLowerCase();
      }
    });
  }

  switchKeysLang() {
    this.currentKeys = this.currentKeys === 2 ? 0 : this.currentKeys + 1;

    this.renderKeys(KEYMAP[this.currentKeys]);
  }
}
