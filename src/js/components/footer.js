import '../../css/footer.css';

const contentDiv = document.getElementById('content');

function createEl(type) {
  return document.createElement(type);
}

function createFooterText() {
  const p = createEl('p');
  p.textContent = 'Developed by ';

  const a = createEl('a');
  a.textContent = 'devinDevelops';
  a.setAttribute('href', 'https://github.com/devinDevelops');
  a.setAttribute('target', '_blank');

  p.appendChild(a);

  return p;
}

function createFooter() {
  const footer = createEl('footer');
  footer.appendChild(createFooterText());

  return footer;
}

function appendFooter() {
  contentDiv.appendChild(createFooter());
}

export default appendFooter;
