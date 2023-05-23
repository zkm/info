import content from './content.json';
import { createElement } from './domUtils';

export function createContentElements() {
  const container = document.querySelector('.container');
  const contentDiv = createElement('div', 'content', '');

  content.sections.forEach(section => {
    const sectionTitle = createElement('h3', null, section.title);
    const sectionContent = createElement('p', null, section.content);

    contentDiv.appendChild(sectionTitle);
    contentDiv.appendChild(sectionContent);
  });

  container.appendChild(contentDiv);
}
