import createEl from '../../createEl';
import '../../../css/homeMain.css';
import Hero from '../../../img/homeIMG.png';

const contentDiv = document.getElementById('content');

function createOrderBtn() {
  const orderBtn = createEl('button');
  orderBtn.textContent = 'ORDER NOW';
  orderBtn.classList.add('btn');

  return orderBtn;
}

function createHomeText() {
  const span = createEl('span');
  span.textContent = 'All The Time';

  const h1 = createEl('h1');
  h1.textContent = `Where It's Coffee Time `;
  h1.appendChild(span);

  const p = createEl('p');
  p.textContent = `Come in and enjoy a hot Cup O' Joe!`;

  const textCont = createEl('div');
  textCont.classList.add('text-cont');

  textCont.appendChild(h1);
  textCont.appendChild(p);
  textCont.appendChild(createOrderBtn());

  return textCont;
}

function createHomeImg() {
  const img = createEl('img');
  img.setAttribute('src', Hero);

  const imgCont = createEl('div');
  imgCont.classList.add('img-cont');
  imgCont.appendChild(img);

  return imgCont;
}

function createHomeMain() {
  const main = createEl('main');
  main.classList.add('home');
  main.appendChild(createHomeText());
  main.appendChild(createHomeImg());

  return main;
}

function appendHome() {
  contentDiv.appendChild(createHomeMain());
}

export default createHomeMain;
export { appendHome };
