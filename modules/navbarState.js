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


export function openMenu() {
  GLOBAL_NAVBAR_STATE_OPENED = !GLOBAL_NAVBAR_STATE_OPENED;
  toggleSidenav();
  changeMenuIcon();
}

window.addEventListener('resize', (event) => {
  const mobileSize = 390;
  if (window.innerWidth > mobileSize && GLOBAL_NAVBAR_STATE_OPENED) {
    GLOBAL_NAVBAR_STATE_OPENED = false;
    toggleSidenav();
    changeMenuIcon();
  }
});
