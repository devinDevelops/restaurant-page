function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hey testing.';

  return element;
}

document.body.appendChild(component());
