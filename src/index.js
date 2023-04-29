import './css/style.css';
import './css/index.css';
import Hero from './img/coffee-restaurant-page.png';

export const contentDiv = document.getElementById('content');
export default function createEl(type) {
  return document.createElement(type);
}

function createHeader() {
  const header = createEl('header');
  const h1 = createEl('h1');
  const h1Cont = createEl('div');
  const ul = createEl('ul');
  const contactBtn = createEl('button');
  const btnCont = createEl('div');

  for (let i = 0; i < 3; i += 1) {
    const arr = ['HOME', 'MENU', 'ABOUT US'];
    const li = createEl('li');
    li.textContent = arr[i];
    ul.appendChild(li);
  }

  h1Cont.classList.add('h1-cont');
  contactBtn.classList.add('btn');
  btnCont.classList.add('btn-cont');

  h1.textContent = `COFFEE O' CLOCK`;
  contactBtn.textContent = 'CONTACT US';

  h1Cont.appendChild(h1);
  btnCont.appendChild(contactBtn);
  header.appendChild(h1Cont);
  header.appendChild(ul);
  header.appendChild(btnCont);
  contentDiv.appendChild(header);
}

function createMain() {
  const main = createEl('main');
  const textCont = createEl('div');
  const h1 = createEl('h1');
  const span = createEl('span');
  const p = createEl('p');
  const img = createEl('img');
  const imgCont = createEl('div');
  const orderBtn = createEl('button');

  h1.textContent = `Where It's Coffee Time `;
  span.textContent = 'All The Time';
  p.textContent = `Come in and enjoy a hot Cup O' Joe`;
  orderBtn.textContent = 'ORDER NOW';

  img.setAttribute('src', Hero);

  orderBtn.classList.add('btn');
  textCont.classList.add('text-cont');
  imgCont.classList.add('img-cont');

  h1.appendChild(span);
  imgCont.appendChild(img);
  textCont.appendChild(h1);
  textCont.appendChild(p);
  textCont.appendChild(orderBtn);
  main.appendChild(textCont);
  main.appendChild(imgCont);
  contentDiv.appendChild(main);
}

createHeader();
createMain();
