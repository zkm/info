import content from "./content.json";

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

export function createContentElements() {
  const container = document.querySelector(".container");

  // Create content div
  const contentDiv = createElement("div", "content");

  // Render welcome section
  const welcomeTitle = createElement("h3", null, content.content.welcome.title);
  const welcomeText = createElement("p", null, content.content.welcome.text);
  contentDiv.appendChild(welcomeTitle);
  contentDiv.appendChild(welcomeText);

  // Render about section
  const aboutTitle = createElement("h3", null, content.content.about.title);
  const aboutText = createElement("p", null, content.content.about.text);
  contentDiv.appendChild(aboutTitle);
  contentDiv.appendChild(aboutText);

  // Render contact section
  const contactTitle = createElement("h3", null, content.content.contact.title);

  // Create separate elements for "Email:" and the email address
  const emailText = createElement(
    "span",
    null,
    ` ${content.content.contact.text.replace(
      "{email}",
      content.content.contact.email
    )}`
  );

  const contactEmail = createElement("p");
  contactEmail.append(emailText);

  contentDiv.appendChild(contactTitle);
  contentDiv.appendChild(contactEmail);

  // Render social links in contact section
  const socialLinksList = createElement("ul");
  content.content.contact.social.forEach((social) => {
    const listItem = createElement("li");
    const link = createElement("a");
    link.href = social.url;
    link.target = "_blank";

    const icon = createElement("img", "social-icon");
    icon.src = social.icon;

    link.appendChild(icon);
    listItem.appendChild(link);
    socialLinksList.appendChild(listItem);
  });

  contentDiv.appendChild(socialLinksList);
  container.appendChild(contentDiv);
}
