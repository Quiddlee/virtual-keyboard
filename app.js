import './style.css';
import Keyboard from './public/components/keyboard/keyboard';
import KeyPressHandler from './public/components/keyboard/key-press-handler';
import Textarea from './public/components/textarea/textarea';
import Notifications from './public/components/notifications/notifications';

const app = document.createElement('div');
const keyboard = new Keyboard().render();
const textArea = new Textarea().render();
const notification = new Notifications().render();

app.setAttribute('id', 'app');
document.body.prepend(app);
app.append(textArea, keyboard, notification);

const keyPressHandler = new KeyPressHandler();

document.body.addEventListener('keydown', keyPressHandler.keyPress);
document.body.addEventListener('keyup', (evt) => keyPressHandler.keyPress(evt, false));
keyboard.addEventListener('mousedown', keyPressHandler.mousePress);
document.body.addEventListener('mouseup', (evt) => keyPressHandler.mousePress(evt, false));
