export default class Notifications {
  constructor() {
    this.notifications = new Map();
    this.animations = new Map([
      ['show', [[
        { transform: 'translateX(-100%) scale(.9)' },
        { transform: 'scale(.9) translateX(0)', offset: 0.5 },
        { transform: 'scale(.9) translateX(0)', offset: 0.8 },
        { transform: 'scale(1)', offset: 1 },
      ], {
        duration: 500,
        easing: 'ease-out',
      }]],
      ['hide', [[
        { transform: 'translateX(0)', opacity: 1 },
        {
          transform: 'translateX(0)', scale: '.9', boxShadow: '0 .1rem .1rem rgba(0, 0, 0, .1)', offset: 0.1,
        },
        { transform: 'translateX(0)', scale: '.9', offset: 0.5 },
        { transform: 'translateX(-100%)', opacity: 0, offset: 1 },
      ], {
        duration: 500,
        easing: 'ease-out',
      }]],
    ]);
  }

  createNotification = (message, name) => {
    const notification = document.createElement('div');
    const notificationText = document.createElement('p');
    const btn = document.createElement('button');
    const timeLine = document.createElement('span');

    notification.classList.add('notification');

    notificationText.classList.add('notification__text');
    notificationText.textContent = message;

    btn.classList.add('notification__btn');
    btn.textContent = 'Ok';

    timeLine.classList.add('notification__time-line');

    notification.append(notificationText, btn, timeLine);

    btn.onclick = (evt) => {
      evt.preventDefault();

      const [keyFrames, options] = this.animations.get('hide');
      notification.animate(keyFrames, options);

      notification.getAnimations()[0].onfinish = () => notification.remove();
    };

    this.notifications.set(name, notification);

    return notification;
  };

  showNotification = (notification) => {
    const [keyFrames, options] = this.animations.get('show');
    this.notifications.get(notification).animate(keyFrames, options);
  };

  render() {
    const shortcutNotification = this.createNotification(`
      Keyboard shortcut: To switch between keyboard layouts, press Ctrl+Alt.
    `, 'shortcut');

    this.showNotification('shortcut');
    return shortcutNotification;
  }
}
