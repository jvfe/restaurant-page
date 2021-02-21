import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";

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
  ourMenu.addEventListener("click", () => {
    createMenu(content);
    addListeners();
  });
}
