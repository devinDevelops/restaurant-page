import '../../css/header.css';

const contentDiv = document.getElementById('content');

function createEl(type) {
  return document.createElement(type);
}

function createHeaderH1() {
  const h1 = createEl('h1');
  h1.textContent = `COFFEE O' CLOCK`;

  const h1Cont = createEl('div');
  h1Cont.classList.add('h1-cont');
  h1Cont.appendChild(h1);

  return h1Cont;
}

function createHeaderNav() {
  const ul = createEl('ul');

  for (let i = 0; i < 3; i += 1) {
    const arr = ['HOME', 'MENU', 'ABOUT US'];
    const li = createEl('li');
    li.textContent = arr[i];
    ul.appendChild(li);
  }

  return ul;
}

function createHeaderContactBtn() {
  const contactBtn = createEl('button');
  contactBtn.textContent = 'CONTACT US';
  contactBtn.classList.add('btn');

  const btnCont = createEl('div');
  btnCont.classList.add('btn-cont');
  btnCont.appendChild(contactBtn);

  return btnCont;
}

function createHeader() {
  const header = createEl('header');
  header.appendChild(createHeaderH1());
  header.appendChild(createHeaderNav());
  header.appendChild(createHeaderContactBtn());

  return header;
}

function appendHeader() {
  contentDiv.appendChild(createHeader());
}

export default appendHeader;
