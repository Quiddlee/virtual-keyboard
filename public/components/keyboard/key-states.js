import Keyboard from './keyboard';
import { KEYMAP } from '../../data/data';

export default class KeyStates extends Keyboard {
  toggleCaps() {
    [...this.keys].forEach((key) => {
      const currKey = key.textContent.trim();
      if (currKey.length !== 1) return;

      key.innerHTML = `
        ${this.isCaps ? currKey.toUpperCase() : currKey.toLowerCase()}
        <span class="key__layer"></span>
      `;
    });
  }

  renderKeysContent() {
    [...this.keys].forEach((key, i) => {
      const currKey = key;
      const newKey = KEYMAP[this.currentLang][this.isShift ? 1 : 0][i];

      if (currKey.textContent.trim().length !== 1 || currKey.textContent.trim() === newKey) return;

      currKey.innerHTML = `
        ${newKey}
        <span class="key__layer"></span>
      `;
    });
  }

  switchKeysLang(evt) {
    if (!evt.altKey || !evt.ctrlKey) return;

    this.currentLang = this.currentLang === KEYMAP.length - 1 ? 0 : this.currentLang + 1;
    localStorage.setItem('currentLang', this.currentLang);

    this.renderKeysContent();
  }

  toggleShift() {
    this.isShift = !this.isShift;
    this.isCaps = !this.isCaps;
    this.renderKeysContent();
    this.toggleCaps();
  }
}
