import '../../../css/menuMain.css';
import cupOJoe from '../../../img/cup-o-joeIMG.jpg';
import cappuccino from '../../../img/cappuccinoIMG.jpg';
import iceCoffee from '../../../img/iceCoffeeIMG.jpg';
import coffeeBreve from '../../../img/coffeeBreveIMG.jpg';
import espressoConPanna from '../../../img/espressoConPannaIMG.jpg';
import cortado from '../../../img/cortadoIMG.jpg';

export default function createMenuMain(createEl, contentDiv) {
  const main = createEl('main');
  const h1 = createEl('h1');
  const h1Cont = createEl('div');
  const gridCont = createEl('div');

  for (let i = 0; i < 6; i += 1) {
    const imgArr = [
      cupOJoe,
      cappuccino,
      iceCoffee,
      coffeeBreve,
      espressoConPanna,
      cortado,
    ];
    const itemH1Arr = [
      `Cup O' Joe`,
      'Cappuccino',
      'Ice Coffee',
      'Coffee Breve',
      'Espresso Con Panna',
      'Cortado',
    ];

    const menuItemCard = createEl('div');
    const menuItemCardCont = createEl('div');
    const itemImg = createEl('img');
    const imgCont = createEl('div');
    const itemH1 = createEl('h1');
    const itemP = createEl('p');
    const itemTxtCont = createEl('div');

    itemH1.textContent = itemH1Arr[i];
    itemP.textContent =
      'HERE IS SOME FILLER TEXT. THIS PRODUCT IS ONE OF OUR BEST.';

    menuItemCard.classList.add('menu-item');
    menuItemCardCont.classList.add('menu-item-cont');
    imgCont.classList.add('img-cont');
    itemTxtCont.classList.add('text-cont');

    itemImg.setAttribute('src', imgArr[i]);

    imgCont.appendChild(itemImg);
    itemTxtCont.appendChild(itemH1);
    itemTxtCont.appendChild(itemP);
    menuItemCard.appendChild(imgCont);
    menuItemCard.appendChild(itemTxtCont);
    menuItemCardCont.appendChild(menuItemCard);
    gridCont.appendChild(menuItemCardCont);
  }

  h1.textContent = 'MENU';

  h1Cont.classList.add('h1-cont');
  gridCont.classList.add('grid-cont');

  h1Cont.appendChild(h1);
  main.appendChild(h1Cont);
  main.appendChild(gridCont);
  contentDiv.appendChild(main);
}
