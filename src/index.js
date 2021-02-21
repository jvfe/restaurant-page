import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact";

const content = document.querySelector("#content");
createHome(content);
addListeners();

function addListeners() {
  const homeButton = document.querySelector(".home");
  homeButton.addEventListener("click", () => {
    createHome(content);
    addListeners();
  });

  const menuButton = document.querySelector(".menu");
  menuButton.addEventListener("click", () => {
    createMenu(content);
    addListeners();
  });

  const ourMenu = document.querySelector(".menu-btn");
  if (ourMenu !== null) {
    ourMenu.addEventListener("click", () => {
      createMenu(content);
      addListeners();
    });
  }

  const contactButton = document.querySelector(".contact");
  contactButton.addEventListener("click", () => {
    createContact(content);
    addListeners();
  });
}
