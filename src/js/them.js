const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switcher = document.querySelector('#theme-switch-toggle');
document.body.classList.add(localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT);
switcher.checked = document.body.classList.contains(Theme.DARK);

switcher.addEventListener('change', () => {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
  localStorage.setItem('theme', document.body.classList.contains(Theme.DARK) ? Theme.DARK : Theme.LIGHT);
})