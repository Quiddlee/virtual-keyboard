export default class Textarea {
  constructor() {
    this.textarea = document.createElement('textarea');
  }

  initializeTextarea() {
    this.textarea.setAttribute('id', 'textarea');
    this.textarea.setAttribute('rows', '5');
    this.textarea.setAttribute('cols', '50');
    this.textarea.setAttribute('placeholder', 'RSS Virtual Keyboard');
    this.textarea.focus();
  }

  render() {
    this.initializeTextarea();
    return this.textarea;
  }
}
