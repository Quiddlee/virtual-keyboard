import Keyboard from './keyboard';
import { KEYMAP } from '../../data/data';

export default class KeyStates extends Keyboard {
  toggleCaps() {
    [...this.keys].forEach((key) => {
      const currKey = key.textContent;
      if (currKey.length !== 1) return;

      key.textContent = this.isCaps
        ? currKey.toUpperCase()
        : currKey.toLowerCase();
    });
  }

  switchKeysLang() {
    this.currentLang = this.currentLang === 2 ? 0 : this.currentLang + 1;
    this.renderKeys(KEYMAP[this.currentLang]);
  }
}
