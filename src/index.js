import { createHome } from "./modules/home";

const content = document.querySelector("#content");
createHome(content);

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", () => createHome(content));
