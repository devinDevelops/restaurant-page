import '../css/style.css';
import createHeader from './components/header';
import createFooter from './components/footer';
import createMenu from './components/main-components/menuMain';
import createHome from './components/main-components/homeMain';
import createAboutUs from './components/main-components/aboutUsMain';

export default function loadPage(tab) {
  let mainToDisp;
  const contentDiv = document.getElementById('content');
  function createEl(type) {
    return document.createElement(type);
  }

  function pickMain() {
    if (tab === 'HOME') mainToDisp = createHome(createEl, contentDiv);

    if (tab === 'MENU') mainToDisp = createMenu(createEl, contentDiv);

    if (tab === 'ABOUT US') mainToDisp = createAboutUs(createEl, contentDiv);

    return mainToDisp();
  }

  createHeader(createEl, contentDiv);
  createHome(createEl, contentDiv);
  pickMain();
  // have this part be the argument that is passed in when calling loadPage
  createFooter(createEl, contentDiv);
}
