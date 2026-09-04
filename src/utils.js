import content from './data/content.json';

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
  const container = document.querySelector('.content');

  // Render welcome section
  const welcomeTitle = createElement('h2', null, content.content.welcome.title);
  const welcomeText = createElement('p', null, content.content.welcome.text);
  container.appendChild(welcomeTitle);
  container.appendChild(welcomeText);

  // Render about section
  const aboutTitle = createElement('h2', null, content.content.about.title);
  const aboutText = createElement('p', null, content.content.about.text);
  container.appendChild(aboutTitle);
  container.appendChild(aboutText);

  // Render contact section
  const contactTitle = createElement('h2', null, content.content.contact.title);

  // Build the contact paragraph with a real mailto link for the email address
  const [beforeEmail, afterEmail] =
    content.content.contact.text.split('{email}');
  const emailLink = createElement('a', null, content.content.contact.email);
  emailLink.href = `mailto:${content.content.contact.email}`;

  const contactParagraph = createElement('p');
  contactParagraph.append(beforeEmail, emailLink, afterEmail);

  container.appendChild(contactTitle);
  container.appendChild(contactParagraph);

  // Render social links in contact section
  const socialLinksList = createElement('ul');
  content.content.contact.social.forEach((social) => {
    const listItem = createElement('li');
    const link = createElement('a');
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const icon = createElement('img', 'social-icon');
    icon.src = social.icon;
    icon.alt = social.name;

    link.appendChild(icon);
    listItem.appendChild(link);
    socialLinksList.appendChild(listItem);
  });

  container.appendChild(socialLinksList);
}
