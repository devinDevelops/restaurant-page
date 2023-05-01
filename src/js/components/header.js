import '../../css/header.css';

export default function createHeader(createEl, contentDiv) {
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
