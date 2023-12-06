

import { openMenu } from '../modules/navbarState.js';
import data from '../assets/data/database.json' assert { type: 'json' };

window.openMenu = openMenu;


function currentTabs() {
  const tabs = document.querySelectorAll('.informations-mobile-tab .select-tab');

  return tabs;
}

function selectTab(tabName) {
  const tabs = currentTabs();

  for (var tab of tabs) {
    if (tab.classList.contains('active')) {
      console.log(tab)
      tab.classList.remove('active');
    }
    if (tab.querySelector('.tab').innerHTML.toLowerCase().includes(tabName)) {
      console.log(tab)
      tab.classList.add('active');
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

  for (var button of buttons) {
    if (button.classList.contains('active-button')) {
      button.classList.remove('active-button');
    }
    if (button.querySelectorAll('.text-button')[1].innerHTML.toLowerCase().includes(typeName)) {
      console.log(button.querySelectorAll('.text-button')[1].innerHTML.toLowerCase().includes(typeName))
      button.classList.add('active-button');
    }
  }
}


window.selectTab = selectTab;

window.addEventListener('DOMContentLoaded', (event) => {
  const currentRoute = window.location.pathname.replace('./', '').replace('.html', '');
  console.log(data);
  currentTabs()[0].classList.add('active');
  // TODO: Load informations here
})