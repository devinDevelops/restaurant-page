import '../css/style.css';
import createHeader from './components/header';
import createFooter from './components/footer';
import createMenu from './components/main-components/menuMain';
import createHome from './components/main-components/homeMain';
import createAboutUs from './components/main-components/aboutUsMain';

export default function loadPage(tab) {
  const contentDiv = document.getElementById('content');
  function createEl(type) {
    return document.createElement(type);
  }

  function setMain() {
    if (tab === 'HOME') return createHome(createEl, contentDiv);
    if (tab === 'MENU') return createMenu(createEl, contentDiv);
    if (tab === 'ABOUT US') return createAboutUs(createEl, contentDiv);
    return createHome(createEl, contentDiv);
  }

  createHeader(createEl, contentDiv);
  setMain();
  createFooter(createEl, contentDiv);
}
