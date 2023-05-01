import '../../../css/homeMain.css';

export default function createMain(createEl, contentDiv, Hero) {
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
