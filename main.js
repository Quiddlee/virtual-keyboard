import './style.css';
import Keyboard from './public/components/keyboard/keyboard';
import KeyPressHandler from './public/components/keyboard/key-press-handler';
import { KEYS_ENG } from './public/data/data';

const app = document.createElement('div');
const keyboard = new Keyboard().render(KEYS_ENG);

app.setAttribute('id', 'app');
document.body.prepend(app);
app.append(keyboard);

document.body.addEventListener('keydown', (evt) => new KeyPressHandler().keyPress(evt));
document.body.addEventListener('keyup', (evt) => new KeyPressHandler().keyPress(evt, false));
