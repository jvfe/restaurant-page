import { setAttributes, renderInOrder } from "./utils.js";
import { createMain } from "./commonModules";

function createContactContent() {
  const subMain = document.createElement("div");
  subMain.classList.add(...["contact-card", "center", "main-card"]);

  const contactDisplay = createContactDisplay();
  subMain.appendChild(contactDisplay);

  return subMain;
}

function createContactDisplay() {
  const contactDisplay = document.createElement("div");
  contactDisplay.classList.add(...["center", "contact-display"]);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Contact";

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  const email = document.createElement("p");
  email.textContent = "Email: coruja@cafe.com";
  const phone = document.createElement("p");
  phone.textContent = "Phone: +55 955 417 3783";
  const address = document.createElement("p");
  address.textContent = "2381 Johnson Street, Palé";

  //prettier-disable
  [email, phone, address].forEach((element) => {
    contactInfo.appendChild(element);
  });

  const mapIframe = document.createElement("iframe");
  setAttributes(mapIframe, {
    class: "map-frame",
    frameborder: "0",
    scrolling: "no",
    marginheight: "0",
    marginwidth: "0",
    src:
      "https://www.openstreetmap.org/export/embed.html?bbox=-118.37064743041992%2C34.0729952204399%2C-118.30490112304689%2C34.123671256221314&amp;layer=mapnik&amp;marker=34.09833703136516%2C-118.3377742767334",
  });

  [title, contactInfo, mapIframe].forEach((contactElement) => {
    contactDisplay.appendChild(contactElement);
  });

  return contactDisplay;
}

function createContact(contentDiv) {
  contentDiv.textContent = "";
  const contactSection = createMain();
  contactSection.appendChild(createContactContent());
  renderInOrder(contentDiv, contactSection);
}

export { createContact };
