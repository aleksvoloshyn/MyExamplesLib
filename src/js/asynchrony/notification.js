// import './../../sass/layout/_notification.scss';
import './../../sass/main.scss';
// **
//  * - Показываем и скрываем добавляя/удаляя класс is-visible
//  * - Скрываем через определённое время
//  * - Скрываем при клике
//  * - Не забываем чистить таймер
//  */

// задержка
const NOTIFICATION_DELAY = 3000;

// обьявляем глобальную переменную
let timeoutId = null;

//объект ссылок
const refs = {
  notification: document.querySelector('.js-alert'),
};

// функция по клику
refs.notification.addEventListener('click', onNotificationClick);

//вызов функции добавления класса
showNotification();

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('Закрываем алерт автоматически чтобы не висел');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
