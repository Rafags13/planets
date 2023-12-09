

import { openMenu } from '../modules/navbarState.js';
import data from '../assets/data/database.json' assert { type: 'json' };

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
  currentPlanet = currentPlanet === '' ? 'earth' : currentPlanet;

  switch (param) {
    case 'overview':
      image.src = `../assets/images/planet-${currentPlanet}.svg`;
      break;
    case 'structure':
      image.src = `../assets/images/internal/planet-${currentPlanet}-internal.svg`;
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

function setCanvasSize() {
  var canvas = document.getElementById('stars-background');
  const documentWidth = window.outerWidth;
  var bodyHeight = document.body.scrollHeight;

  canvas.height = bodyHeight;
  canvas.width = documentWidth;
}

function quadrantsOfScreen() {
  const gap = 10;
  const documentWidth = window.outerWidth;
  var bodyHeight = document.body.scrollHeight;

  const firstPoint = { width: documentWidth / 2 - gap, height: bodyHeight / 2 - gap };
  const secondPoint = { width: documentWidth / 2 + gap, height: bodyHeight / 2 - gap };
  const thirdPoint = { width: documentWidth / 2 - gap, height: bodyHeight / 2 + gap };
  const fourthPoint = { width: documentWidth / 2 + gap, height: bodyHeight / 2 + gap };

  return {firstPoint, secondPoint, thirdPoint, fourthPoint};
}

window.addEventListener('DOMContentLoaded', (event) => {
  const currentRoute = getCurrentRoute();

  currentTabs()[0].setAttribute('style', `border-bottom-color: ${planetBorderColors[currentRoute]}`);
  currentDescriptionButtons()[0].setAttribute('style', `background-color: ${planetBorderColors[currentRoute]}`);

  setCanvasSize();
  createStar();

  // const { firstPoint, secondPoint, thirdPoint, fourthPoint } = quadrantsOfScreen();
});

function returnCurrentContextFromCanvas() {
  var canvas = document.getElementById('stars-background');
  const ctx = canvas.getContext("2d");

  return ctx;
}

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

function calculatePositionByInitialStarPosition(positionX, positionY) {
  var bodyHeight = document.body.scrollHeight;
  var spareHeight = bodyHeight - positionY;
  var spareHypotenuse = Math.sqrt((positionX * positionX) + (spareHeight * spareHeight));
  var realHypotenuse = (positionY * spareHypotenuse) / spareHeight;
  var realWidth = (positionX * realHypotenuse) / spareHypotenuse;  
  var valueToSumInX = realWidth / realHypotenuse;
  var valueToSumInY = positionY / realHypotenuse;
  
  return {valueToSumInX, valueToSumInY};
}
class Star {
  constructor(positionX, positionY, zIndex) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.zIndex = zIndex;
  }

  createStar() {
    // console.log('teste')
    const context = returnCurrentContextFromCanvas();
    const documentWidth = window.innerWidth;
    const documentHeight = document.body.scrollHeight;
    let {valueToSumInX, valueToSumInY} = calculatePositionByInitialStarPosition(this.positionX, this.positionY);
    this.positionX += valueToSumInX;
    this.positionY -= valueToSumInY;
    this.zIndex += 0.015;
    context.clearRect(0, 0, documentWidth, documentHeight);
    context.beginPath();
    context.fillStyle = "white";
    context.arc(this.positionX, this.positionY, this.zIndex, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    // requestAnimationFrame(this.createStar);
    // If you uncomment this above live, you'll see the hell inside your cpu
    // good luck
  }
}


function createStar() {
  let starOne = new Star(1000, 768, 5);

  
  starOne.createStar();
  
}
window.addEventListener('resize', () => {
  setCanvasSize();
});
