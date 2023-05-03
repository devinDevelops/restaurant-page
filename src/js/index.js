import loadPage, { appendTargetMain, removeCurrMain } from './loadPage';

loadPage();

function addLiListeners() {
  const liEls = document.querySelectorAll('li');
  liEls.forEach(li =>
    li.addEventListener('click', e => {
      removeCurrMain();
      appendTargetMain(e.target.textContent);
    })
  );
}

addLiListeners();
// style the other main component pages

// write the logic that listens for a tab click and then
// switches the main-component that displays to that
// corrensponding tab

// have loadPage take an argument that will be the tab that
// is clicked(the main component to display)
// call loadPage on each tab switch
