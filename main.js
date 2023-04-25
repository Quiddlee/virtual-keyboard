import './style.css';
import keyboard from './public/components/keyboard';
import { KEYS_RU } from './public/data/data';

const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.prepend(app);

app.append(keyboard(KEYS_RU));
