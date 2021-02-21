import {
  createHeader,
  createMain,
  createFooter,
} from "./modules/commonModules";
import { createHomeContent } from "./modules/home";

const content = document.querySelector("#content");
console.log("I'm working!");
content.appendChild(createHeader());

const mainSection = createMain();
mainSection.appendChild(createHomeContent());
content.appendChild(mainSection);
content.appendChild(createFooter());
