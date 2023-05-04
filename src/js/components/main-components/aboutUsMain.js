import createEl from '../../createEl';
import '../../../css/aboutUsMain.css';
import aboutUsIMG from '../../../img/aboutUsIMG.jpg';

function createAboutUsHeader() {
  const aboutUsH1 = createEl('h1');
  aboutUsH1.classList.add('h1-cont');
  aboutUsH1.textContent = 'ABOUT US';

  const aboutUsH1Cont = createEl('div');
  aboutUsH1Cont.appendChild(aboutUsH1);

  return aboutUsH1Cont;
}

function createAboutUsPs() {
  const p1 = createEl('p');
  p1.textContent =
    'THIS IS SOME MORE FILLER TEXT. STOP IN AND ENJOY A HOT CUP O JOE.';

  const p2 = createEl('p');
  p2.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Id interdum velit laoreet id donec ultrices. Eget mi proin sed libero. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Sed viverra tellus in hac habitasse.';

  const p3 = createEl('p');
  p3.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Aliquam sem fringilla ut morbi. Vitae aliquet nec ullamcorper sit.';

  const pCont = createEl('div');
  pCont.classList.add('text-cont');
  pCont.appendChild(p1);
  pCont.appendChild(p2);
  pCont.appendChild(p3);

  return pCont;
}

function createAboutUsImg() {
  const img = createEl('img');
  img.setAttribute('src', aboutUsIMG);

  const imgCont = createEl('div');
  imgCont.classList.add('img-cont');
  imgCont.appendChild(img);

  return imgCont;
}

function createAboutUsMain() {
  const main = createEl('main');

  main.classList.add('about-us');

  main.appendChild(createAboutUsHeader());
  main.appendChild(createAboutUsPs());
  main.appendChild(createAboutUsImg());

  return main;
}

export default createAboutUsMain;
