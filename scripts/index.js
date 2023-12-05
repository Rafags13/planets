let GLOBAL_NAVBAR_STATE_OPENED = false;

function changeMenuIcon() {
  const hamburguerMenu = document.querySelector('#hamburguer-menu .material-symbols-outlined.white.size-32');
  hamburguerMenu.innerHTML = GLOBAL_NAVBAR_STATE_OPENED ? "close" : "menu";
}

function toggleSidenav() {
  const hiddenMenu = document.querySelector('section.menu-overriding-page');
  
  hiddenMenu.classList.add(GLOBAL_NAVBAR_STATE_OPENED ? 'show' : 'hide');
  hiddenMenu.classList.remove(GLOBAL_NAVBAR_STATE_OPENED ? 'hide' : 'show');
}

window.addEventListener('resize', (event) => {
  const mobileSize = 390;
  if (window.innerWidth > mobileSize && GLOBAL_NAVBAR_STATE_OPENED) {
    GLOBAL_NAVBAR_STATE_OPENED = false;
    toggleSidenav();
    changeMenuIcon();
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const currentRoute = window.location.pathname.replace('/planets/', '').replace('.html', '');

  var items = document.querySelectorAll('.list-item a');

  for (var item of items) {
    if (item.innerHTML.toLowerCase() === currentRoute) {
      item.classList.add('background-ative');
    }
  }
})

function openMenu() {
  GLOBAL_NAVBAR_STATE_OPENED = !GLOBAL_NAVBAR_STATE_OPENED;
  toggleSidenav();
  changeMenuIcon();
}