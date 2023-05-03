import '../css/style.css';
import createHeader from './components/header';
import createFooter from './components/footer';
import createMenu from './components/main-components/menuMain';
import createHome from './components/main-components/homeMain';
import createAboutUs from './components/main-components/aboutUsMain';

const contentDiv = document.getElementById('content');

function createEl(type) {
  return document.createElement(type);
}

export default function loadPage() {
  createHeader(createEl, contentDiv);
  createHome(createEl, contentDiv);
  createFooter(createEl, contentDiv);
}

let main;
export function appendTargetMain(target) {
  const headerEl = document.querySelector('header');

  if (target === 'MENU') main = createMenu(createEl, contentDiv);
  if (target === 'HOME') main = createHome(createEl, contentDiv);
  if (target === 'ABOUT US') main = createAboutUs(createEl, contentDiv);

  headerEl.insertAdjacentElement('afterend', main);
}

export function removeCurrMain() {
  const currMain = document.querySelector('main');
  currMain.remove();
}

// call createHeader and createFooter once
// create a fn that places the new main to create just after the headerEl
// return the main var from each Main comp
// insertAdjacentElement(position, element)
// header.insetAdEl('afterend', newMain)
// take the return value of each mainComp and use that to append to the content Div
// use prototypal inheritence on each comp to add the createEl fn
