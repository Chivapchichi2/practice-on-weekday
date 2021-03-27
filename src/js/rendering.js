import menuList from '../data/menu.json';
import mark from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', mark(menuList));