import loadInitialPage, { appendTargetMain, removeCurrMain } from './loadPage';

loadInitialPage();

function addNavListeners() {
  const liEls = document.querySelectorAll('li');

  liEls.forEach(li =>
    li.addEventListener('click', e => {
      removeCurrMain();
      appendTargetMain(e.target.textContent);
    })
  );
}

addNavListeners();
