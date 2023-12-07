

import { openMenu } from '../modules/navbarState.js';
import data from '../assets/data/database.json' assert { type: 'json' };

window.openMenu = openMenu;

const planetBorderColors = {
    '/': '#6F2ED4',
    'earth': '#6F2ED4',
    'mercury': '#419EBB',
    'venus': '#EDA249',
    'mars': '#D83A34',
    'jupiter': '#D86534',
    'saturn': '#B87D43',
    'uranus': '#1EC1A2',
    'neptune': '#2D68F0'
  }

function currentTabs() {
  const tabs = document.querySelectorAll('.informations-mobile-tab .select-tab');

  return tabs;
}

function selectTab(tabName) {
  const tabs = currentTabs();
  const currentRoute = window.location.pathname.replace('/planet/', '').replace('.html', '');

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

function currentDescriptionButtons() {
  const buttons = document.querySelectorAll('.change-informations-container .information-button');

  return buttons;
}

window.selectDescriptionType = selectDescriptionType;

function selectDescriptionType(typeName) {
  const buttons = currentDescriptionButtons();
  const currentRoute = window.location.pathname.replace('/planet/', '').replace('.html', '');

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


window.selectTab = selectTab;

document.addEventListener('DOMContentLoaded', (event) => {
  const currentRoute = window.location.pathname.replace('/planet/', '').replace('.html', '');

  for (var tab of currentTabs()) {
    if (tab.classList.contains('active')) {
      tab.setAttribute('style', `border-bottom-color: ${planetBorderColors[currentRoute]}`);
    }
  }

  for (var button of currentDescriptionButtons()) {
    if (button.classList.contains('active-button')) {
       button.setAttribute('style', `background-color: ${planetBorderColors[currentRoute]}`);
    }
  }


});