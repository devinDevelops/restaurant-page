export const contentDiv = document.getElementById('content');
export default function createEl(type) {
  return document.createElement(type);
}

const header = createEl('header');
const h1 = createEl('h1');
const ul = createEl('ul');
const btn = createEl('button');

for (let i = 0; i < 3; i += 1) {
  const arr = ['HOME', 'MENU', 'ABOUT US'];
  const li = createEl('li');
  li.textContent = arr[i];
  ul.appendChild(li);
}

h1.textContent = `COFFEE O' CLOCK`;
btn.textContent = 'CONTACT US';

header.appendChild(h1);
header.appendChild(ul);
header.appendChild(btn);
contentDiv.appendChild(header);
