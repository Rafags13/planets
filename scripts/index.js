import { openMenu } from '../modules/navbarState.js';

window.openMenu = openMenu;
window.selectDescriptionType = selectDescriptionType;
window.selectTab = selectTab;

const planetBorderColors = {
  '/': '#6F2ED4',
    '/earth': '#6F2ED4',
    '/mercury': '#419EBB',
    '/venus': '#EDA249',
    '/mars': '#D83A34',
    '/jupiter': '#D86534',
    '/saturn': '#B87D43',
    '/uranus': '#1EC1A2',
    '/neptune': '#2D68F0'
}

const getCurrentRoute = () => {
  const lastOcurrenceOfPath = window.location.pathname.lastIndexOf('/');

  const currentRouteSubtring = window.location.pathname.substring(lastOcurrenceOfPath, window.location.pathname.length).replace('.html', '').replace('/index', '/');

  return currentRouteSubtring;
}

function currentTabs() {
  const tabs = document.querySelectorAll('.informations-mobile-tab .select-tab');

  return tabs;
}

function selectTab(tabName) {
  const tabs = currentTabs();

  const currentRoute = getCurrentRoute();

  setImageByParam(tabName);

  for (var tab of tabs) {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
      tab.removeAttribute('style', `border-bottom-color: ${planetBorderColors[currentRoute]}`);
    }
    if (tab.querySelector('.tab').innerHTML.toLowerCase().includes(tabName)) {
      tab.classList.add('active');
      tab.setAttribute('style', `border-bottom-color: ${planetBorderColors[currentRoute]}`);
    }
  }
}

const setImageByParam = (param) => {
  let image = document.querySelector('.image-container img');  
  let currentPlanet = getCurrentRoute().replace('/index', '').replace('/', '');
  const correctPathStart = currentPlanet === '' ? './' : '../'
  currentPlanet = currentPlanet === '' ? 'earth' : currentPlanet;

  switch (param) {
    case 'overview':
      image.src = `${correctPathStart}assets/images/planet-${currentPlanet}.svg`;
      break;
    case 'structure':
      image.src = `${correctPathStart}/assets/images/internal/planet-${currentPlanet}-internal.svg`;
      break;
  }
}

function currentDescriptionButtons() {
  const buttons = document.querySelectorAll('.change-informations-container .information-button');

  return buttons;
}

function selectDescriptionType(typeName) {
  const buttons = currentDescriptionButtons();
  const currentRoute = getCurrentRoute();
  setImageByParam(typeName);

  for (var button of buttons) {
    if (button.classList.contains('active-button')) {
      button.classList.remove('active-button');
      button.removeAttribute('style');
    }
    if (button.querySelectorAll('.text-button')[1].innerHTML.toLowerCase().includes(typeName)) {
      button.classList.add('active-button');
      button.setAttribute('style', `background-color: ${planetBorderColors[currentRoute]}`);
    }
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  const currentRoute = getCurrentRoute();

  currentTabs()[0].setAttribute('style', `border-bottom-color: ${planetBorderColors[currentRoute]}`);
  currentDescriptionButtons()[0].setAttribute('style', `background-color: ${planetBorderColors[currentRoute]}`);
});