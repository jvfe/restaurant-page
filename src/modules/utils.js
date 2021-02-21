import { createHeader, createFooter } from "./commonModules";

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function renderInOrder(contentDiv, element) {
  const header = createHeader();
  const footer = createFooter();
  contentDiv.appendChild(header);
  contentDiv.appendChild(element);
  contentDiv.appendChild(footer);
}

export { setAttributes, renderInOrder };
