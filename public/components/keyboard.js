export default function keyboard(keys) {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard');

  for (let i = 0; i < keys.length; i += 1) {
    const key = document.createElement('div');

    if (keys[i] === ' ') key.classList.add('space');
    if (keys[i] === 'Shift') key.classList.add('shift');

    key.classList.add('key');
    key.textContent = keys[i];
    keyboardWrapper.append(key);
  }

  return keyboardWrapper;
}
