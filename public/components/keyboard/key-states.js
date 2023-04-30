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
    this.currentLang = this.currentLang === KEYMAP.length - 1 ? 0 : this.currentLang + 1;
    this.renderKeys(KEYMAP[this.currentLang][0]);

    ['altleft', 'controlleft'].forEach((key) => {
      this.getKey(key)?.classList.add('active');
    });

    localStorage.setItem('currentLang', this.currentLang);
  }

  toggleShift() {
    this.isShift = !this.isShift;

    [...this.keys].forEach((key, i) => {
      const currKey = key;
      const newKey = KEYMAP[this.currentLang][this.isShift ? 1 : 0][i];

      if (currKey.textContent.length !== 1 || currKey.textContent === newKey) return;

      currKey.textContent = newKey;
    });
  }
}
