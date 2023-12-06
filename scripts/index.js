

import { openMenu } from '../modules/navbarState.js';
import data from '../assets/data/database.json' assert { type: 'json' };

window.openMenu = openMenu;

window.addEventListener('DOMContentLoaded', (event) => {
  const currentRoute = window.location.pathname.replace('./', '').replace('.html', '');
  console.log(data);
  // TODO: Load informations here
})