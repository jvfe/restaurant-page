import { setAttributes, renderInOrder } from "./utils.js";
import { createMain } from "./commonModules";

function createMenuContent() {
  const subMain = document.createElement("div");
  subMain.classList.add(...["center", "main-card"]);

  const menuDisplay = document.createElement("div");
  menuDisplay.classList.add(...["center", "menu-display"]);

  const cupcake = createIndividualItem(
    "cupcake.png",
    "a delicious cupcake",
    "Cupcake",
    "Suco de cevadiss deixa as pessoas mais interessantis.",
    "R$ 20,00"
  );

  const coffee = createIndividualItem(
    "coffee.png",
    "a cup of coffee",
    "Coffee",
    "Viva Forevis aptent taciti sociosqu ad litora torquent.",
    "R$ 5,00"
  );

  const croissant = createIndividualItem(
    "croissant.png",
    "a croissant",
    "Croissant",
    "Si num tem leite então bota uma pinga aí cumpadi!",
    "R$ 20,00"
  );

  [cupcake, coffee, croissant].forEach((item) => {
    menuDisplay.appendChild(item);
  });

  subMain.appendChild(menuDisplay);

  return subMain;
}

function createIndividualItem(
  imgSrc,
  imgAlt,
  itemTitle,
  itemDescription,
  itemPrice
) {
  const article = document.createElement("article");
  article.classList.add(...["center", "menu-item"]);

  const img = document.createElement("img");
  setAttributes(img, {
    class: "menu-photo",
    src: `assets/img/${imgSrc}`,
    alt: `${imgAlt}`,
  });

  const section = createSection(itemTitle, itemDescription, itemPrice);

  [img, section].forEach((element) => {
    article.appendChild(element);
  });

  return article;
}

function createSection(itemTitle, itemDescription, itemPrice) {
  const section = document.createElement("section");
  section.classList.add("item-section");

  const title = document.createElement("h1");
  title.classList.add("menu-title");
  title.textContent = itemTitle;

  const itemDescrip = document.createElement("p");
  itemDescrip.classList.add("item-description");
  itemDescrip.textContent = itemDescription;

  const price = document.createElement("p");
  price.classList.add("item-price");
  price.textContent = itemPrice;

  [title, itemDescrip, price].forEach((element) => {
    section.appendChild(element);
  });

  return section;
}

function createMenu(contentDiv) {
  contentDiv.textContent = "";
  const mainSection = createMain();
  mainSection.appendChild(createMenuContent());
  renderInOrder(contentDiv, mainSection);
}

export { createMenu };
