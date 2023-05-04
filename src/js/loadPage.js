import '../css/style.css';
import appendHeader from './components/header';
import appendFooter from './components/footer';
import getHomeMain, { appendHome } from './components/main-components/homeMain';
import getMenuMain from './components/main-components/menuMain';

import getAboutUsMain from './components/main-components/aboutUsMain';

export default function loadPage() {
  appendHeader();
  appendHome();
  appendFooter();
}

let main;

export function appendTargetMain(target) {
  const headerEl = document.querySelector('header');

  if (target === 'MENU') main = getMenuMain();
  if (target === 'HOME') main = getHomeMain();
  if (target === 'ABOUT US') main = getAboutUsMain();

  headerEl.insertAdjacentElement('afterend', main);
}

export function removeCurrMain() {
  const currMain = document.querySelector('main');
  currMain.remove();
}
