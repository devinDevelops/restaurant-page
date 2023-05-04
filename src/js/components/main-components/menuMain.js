import createEl from '../../createEl';
import '../../../css/menuMain.css';
import cupOJoe from '../../../img/cup-o-joeIMG.jpg';
import cappuccino from '../../../img/cappuccinoIMG.jpg';
import iceCoffee from '../../../img/iceCoffeeIMG.jpg';
import coffeeBreve from '../../../img/coffeeBreveIMG.jpg';
import espressoConPanna from '../../../img/espressoConPannaIMG.jpg';
import cortado from '../../../img/cortadoIMG.jpg';

function createMenuHeader() {
  const menuH1 = createEl('h1');
  menuH1.textContent = 'MENU';

  const menuH1Cont = createEl('div');
  menuH1Cont.classList.add('h1-cont');
  menuH1Cont.appendChild(menuH1);

  return menuH1Cont;
}

function createMenuItem(itemName, itemPic) {
  const itemImg = createEl('img');
  itemImg.setAttribute('src', itemPic);

  const imgCont = createEl('div');
  imgCont.classList.add('img-cont');
  imgCont.appendChild(itemImg);

  const itemH1 = createEl('h1');
  itemH1.textContent = itemName;

  const itemP = createEl('p');
  itemP.textContent =
    'HERE IS SOME FILLER TEXT. THIS PRODUCT IS ONE OF OUR BEST.';

  const itemTxtCont = createEl('div');
  itemTxtCont.classList.add('text-cont');
  itemTxtCont.appendChild(itemH1);
  itemTxtCont.appendChild(itemP);

  const menuItemCard = createEl('div');
  menuItemCard.classList.add('menu-item');
  menuItemCard.appendChild(imgCont);
  menuItemCard.appendChild(itemTxtCont);

  const menuItemCardCont = createEl('div');
  menuItemCardCont.classList.add('menu-item-cont');
  menuItemCardCont.appendChild(menuItemCard);

  return menuItemCardCont;
}

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

function createMenuGrid() {
  const menuItemGrid = createEl('div');
  menuItemGrid.classList.add('grid-cont');

  for (let i = 0; i < 6; i += 1) {
    menuItemGrid.appendChild(createMenuItem(itemH1Arr[i], imgArr[i]));
  }

  return menuItemGrid;
}

function createMenuMain() {
  const main = createEl('main');
  main.classList.add('menu');

  main.appendChild(createMenuHeader());
  main.appendChild(createMenuGrid());

  return main;
}

export default createMenuMain;
