import '../css/style.css';
import Hero from '../img/coffee-restaurant-page.png';
import createHeader from './components/header';
import createFooter from './components/footer';
import createHomeMain from './components/main-components/homeMain';

export default function loadPage() {
  const contentDiv = document.getElementById('content');
  function createEl(type) {
    return document.createElement(type);
  }

  createHeader(createEl, contentDiv);
  createHomeMain(createEl, contentDiv, Hero);
  createFooter(createEl, contentDiv);
}
