import '../css/style.css';
// import Hero from '../img/homeIMG.png';
import createHeader from './components/header';
import createFooter from './components/footer';
// import createHomeMain from './components/main-components/homeMain';
import createMenuMain from './components/main-components/menuMain';

export default function loadPage() {
  const contentDiv = document.getElementById('content');
  function createEl(type) {
    return document.createElement(type);
  }

  createHeader(createEl, contentDiv);
  createMenuMain(createEl, contentDiv);
  // createHomeMain(createEl, contentDiv, Hero); // have this part be the argument that is passed in when calling loadPage
  createFooter(createEl, contentDiv);
}
