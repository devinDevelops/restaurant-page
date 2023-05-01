import '../../css/footer.css';

export default function createFooter(createEl, contentDiv) {
  const footer = createEl('footer');
  const p = createEl('p');
  const a = createEl('a');

  p.textContent = 'Developed by ';
  a.textContent = 'devinDevelops';

  a.setAttribute('href', 'https://github.com/devinDevelops');
  a.setAttribute('target', '_blank');

  p.appendChild(a);
  footer.appendChild(p);
  contentDiv.appendChild(footer);
}
