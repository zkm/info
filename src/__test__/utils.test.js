import { createContentElements } from '../utils';
import { createElement } from '../domUtils';
import content from '../data/content.json';

// Mock the container element
const container = createElement('div', 'container');
document.querySelector = jest.fn().mockReturnValue(container);

test('createContentElements renders the content sections correctly', () => {
  createContentElements();

  // Check if the content sections are rendered correctly
  expect(container.querySelectorAll('h3').length).toBe(3);
  expect(container.querySelectorAll('p').length).toBe(3);

  // Check if the welcome section is rendered correctly
  expect(container.querySelector('h3').textContent).toBe(content.content.welcome.title);
  expect(container.querySelector('p').textContent).toBe(content.content.welcome.text);

  // Check if the about section is rendered correctly
  expect(container.querySelectorAll('h3')[1].textContent).toBe(content.content.about.title);
  expect(container.querySelectorAll('p')[1].textContent).toBe(content.content.about.text);

  // Check if the contact section is rendered correctly
  expect(container.querySelectorAll('h3')[2].textContent).toBe(content.content.contact.title);
  expect(container.querySelectorAll('p')[2].textContent).toContain(content.content.contact.email);
});
