import '../../../css/aboutUsMain.css';
import aboutUsIMG from '../../../img/aboutUsIMG.jpg';

export default function createAboutUsMain(createEl, contentDiv) {
  const main = createEl('main');
  const h1Cont = createEl('div');
  const h1 = createEl('h1');
  const pCont = createEl('div');
  const p1 = createEl('p');
  const p2 = createEl('p');
  const p3 = createEl('p');
  const img = createEl('img');
  const imgCont = createEl('div');

  h1.textContent = 'ABOUT US';
  p1.textContent =
    'THIS IS SOME MORE FILLER TEXT. STOP IN AND ENJOY A HOT CUP O JOE.';
  p2.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Id interdum velit laoreet id donec ultrices. Eget mi proin sed libero. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Sed viverra tellus in hac habitasse.';
  p3.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Aliquam sem fringilla ut morbi. Vitae aliquet nec ullamcorper sit.';

  img.setAttribute('src', aboutUsIMG);

  h1Cont.classList.add('h1-cont');
  pCont.classList.add('text-cont');
  imgCont.classList.add('img-cont');
  main.classList.add('about-us');

  h1Cont.appendChild(h1);
  pCont.appendChild(p1);
  pCont.appendChild(p2);
  pCont.appendChild(p3);
  imgCont.appendChild(img);
  main.appendChild(h1Cont);
  main.appendChild(pCont);
  main.appendChild(imgCont);
  contentDiv.appendChild(main);
}
