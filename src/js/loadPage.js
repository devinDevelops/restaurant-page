import '../css/style.css';
import createHeader from './components/header';
import createFooter from './components/footer';
// import createMenu from './components/main-components/menuMain';
import createHome from './components/main-components/homeMain';
// import createAboutUs from './components/main-components/aboutUsMain';

export default function loadPage() {
  const contentDiv = document.getElementById('content');
  function createEl(type) {
    return document.createElement(type);
  }

  createHeader(createEl, contentDiv);
  // createAboutUs(createEl, contentDiv);
  // createMenu(createEl, contentDiv);
  createHome(createEl, contentDiv);
  // have this part be the argument that is passed in when calling loadPage
  createFooter(createEl, contentDiv);
}
