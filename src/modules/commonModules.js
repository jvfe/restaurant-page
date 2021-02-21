import { setAttributes } from "./utils.js";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add(...["center-flex", "top-bottom", "head"]);
  const ul = document.createElement("ul");
  ul.classList.add(...["center-flex", "tabs"]);

  const tabs = ["Home", "Menu", "Contact"];

  tabs.forEach((tab) => {
    const li = document.createElement("li");
    li.classList.add(...["tab", "margin-around"]);
    li.textContent = tab;
    ul.appendChild(li);
  });

  header.appendChild(ul);

  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add(...["center-flex", "top-bottom", "foot"]);

  const svgs = [
    document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    document.createElementNS("http://www.w3.org/2000/svg", "svg"),
  ];

  svgs[0].innerHTML = `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> 
  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path> 
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>`;

  svgs[1].innerHTML = `<path
    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 
    4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
    </path>`;

  svgs[2].innerHTML = `<path
    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
    ></path>`;

  svgs.forEach((svg) => {
    setAttributes(svg, {
      class: "margin-around social-icon",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    });
    footer.appendChild(svg);
  });

  return footer;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add(...["center"]);

  return main;
}

export { createHeader, createFooter, createMain };
