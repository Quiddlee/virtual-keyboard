import './style.css';
import keyboard from './public/components/keyboard/keyboard';
import { KEYS_UKR } from './public/data/data';

const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.prepend(app);

app.append(keyboard(KEYS_UKR));
