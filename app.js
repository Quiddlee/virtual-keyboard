import './style.css';
import Keyboard from './public/components/keyboard/keyboard';
import KeyPressHandler from './public/components/keyboard/key-press-handler';
import Textarea from './public/components/textarea/textarea';

const app = document.createElement('div');
const keyboard = new Keyboard().render();
const textArea = new Textarea().render();

app.setAttribute('id', 'app');
document.body.prepend(app);
app.append(textArea, keyboard);

const keyPressHandler = new KeyPressHandler();

document.body.addEventListener('keydown', keyPressHandler.keyPress);
document.body.addEventListener('keyup', (evt) => keyPressHandler.keyPress(evt, false));
keyboard.addEventListener('mousedown', keyPressHandler.mousePress);
document.body.addEventListener('mouseup', (evt) => keyPressHandler.mousePress(evt, false));
