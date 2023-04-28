const KEYS_RU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', '[', ']', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
const KEYS_ENG = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
const KEYS_UA = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', '[', ']', '\\', 'Del', 'CapsLock', 'ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
const KEYMAP = [KEYS_RU, KEYS_ENG, KEYS_UA];

const EXCEPTIONS = new Map([
  ['Del', [['Delete'], '']],
  ['Shift', [['Shift-1', 'Shift-2'], 'shift']],
  ['CapsLock', [[''], 'caps']],
  ['Enter', [[''], 'enter']],
  ['▲', [['ArrowUp'], '']],
  ['▼', [['ArrowDown'], '']],
  ['◄', [['ArrowLeft'], '']],
  ['►', [['ArrowRight'], '']],
  [' ', [['Space'], 'space']],
  ['Alt', [['Alt-1', 'Alt-2'], 'alt']],
  ['Ctrl', [['Control-1', 'Control-2'], 'ctrl']],
  ['Win', [['Meta'], 'win']],
]);

export { KEYMAP, EXCEPTIONS };
