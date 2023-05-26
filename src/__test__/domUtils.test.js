import { createElement } from '../domUtils';

test('createElement creates a DOM element with the specified tag, class, and text', () => {
  const element = createElement('div', 'my-class', 'Hello, world!');

  expect(element.tagName).toBe('DIV');
  expect(element.className).toBe('my-class');
  expect(element.textContent).toBe('Hello, world!');
});
