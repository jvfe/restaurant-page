import { setAttributes } from "./utils.js";

function createTitleSection() {
  const titleSection = document.createElement("div");
  titleSection.classList.add(...["title-section"]);

  const title1 = document.createElement("h1");
  title1.classList.add(...["title", "title1"]);
  title1.textContent = "Coruja";

  const title2 = document.createElement("h2");
  title2.classList.add(...["title", "title2"]);
  title2.textContent = "café";

  titleSection.appendChild(title1);
  titleSection.appendChild(title2);

  return titleSection;
}

function createMainDescription() {
  const mainDescription = document.createElement("div");
  mainDescription.classList.add(...["center", "main-description"]);

  const img = document.createElement("img");
  setAttributes(img, {
    class: "tea-pic",
    src: "assets/img/tea-picture.jpg",
    alt: "Cozy picture of tea",
  });

  const restDescription = document.createElement("div");
  restDescription.classList.add(...["center", "rest-about"]);

  const pDescript = document.createElement("p");
  pDescript.textContent =
    "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz \
    malandris se pirulitá. Tá deprimidis, eu conheço uma cachacis \
    que pode alegrar sua vidis. Todo mundo vê os porris que eu tomo \
    mas ninguém vê os tombis que eu levo! Nec orci ornare consequat.\
    Praesent lacinia ultrices consectetur. Sed non ipsum felis.";
  const seeMenuBtn = document.createElement("button");
  seeMenuBtn.classList.add("menu-btn");
  seeMenuBtn.textContent = "Our Menu";
  restDescription.appendChild(pDescript);
  restDescription.appendChild(seeMenuBtn);

  mainDescription.appendChild(img);
  mainDescription.appendChild(restDescription);

  return mainDescription;
}

function createHomeContent() {
  const subMain = document.createElement("div");
  subMain.classList.add(...["center", "main-card"]);

  const titleSection = createTitleSection();
  const description = createMainDescription();

  subMain.appendChild(titleSection);
  subMain.appendChild(description);

  return subMain;
}

export { createHomeContent };
