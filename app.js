import './style.css';
import Keyboard from './public/components/keyboard/keyboard';
import KeyPressHandler from './public/components/keyboard/key-press-handler';

const app = document.createElement('div');
const keyboard = new Keyboard().render();

app.setAttribute('id', 'app');
document.body.prepend(app);
app.append(keyboard);

const keyPressHandler = new KeyPressHandler();

document.body.addEventListener('keydown', keyPressHandler.keyPress);
document.body.addEventListener('keyup', (evt) => keyPressHandler.keyPress(evt, false));
