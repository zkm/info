import content from './content.json';
import { createElement } from './domUtils';

export function createContentElements() {
  const container = document.querySelector('.container');

  // Create content div
  const contentDiv = createElement('div', 'content');

  // Render welcome section
  const welcomeTitle = createElement('h1', null, content.welcome.title);
  const welcomeText = createElement('p', null, content.welcome.text);
  contentDiv.appendChild(welcomeTitle);
  contentDiv.appendChild(welcomeText);

  // Render about section
  const aboutTitle = createElement('h2', null, content.about.title);
  const aboutText = createElement('p', null, content.about.text);
  contentDiv.appendChild(aboutTitle);
  contentDiv.appendChild(aboutText);

  // Render contact section
  const contactTitle = createElement('h3', null, content.contact.title);

  // Create separate elements for "Email:" and the email address
  const emailLabel = createElement('strong', null, 'Email:');
  const emailText = createElement('span', null, ` ${content.contact.email}`);
  const contactEmail = createElement('p');
  contactEmail.append(emailLabel, emailText);

  contentDiv.appendChild(contactTitle);
  contentDiv.appendChild(contactEmail);

  // Render social links in contact section
  const socialLinksList = createElement('ul');
  content.contact.social.forEach(social => {
    const listItem = createElement('li');
    const link = createElement('a');
    link.href = social.url;

    const icon = createElement('img', 'social-icon');
    icon.src = social.icon;

    link.appendChild(icon);
    listItem.appendChild(link);
    socialLinksList.appendChild(listItem);
  });

  contentDiv.appendChild(socialLinksList);

  container.appendChild(contentDiv);
}
