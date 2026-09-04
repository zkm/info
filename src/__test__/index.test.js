beforeEach(() => {
  jest.resetModules();
});

test('builds the mailto href and visible text from the data attributes', () => {
  document.body.innerHTML =
    "<a id='contact-email' data-user='me' data-domain='example.com'></a>";

  require('../index');

  const link = document.getElementById('contact-email');
  expect(link.href).toBe('mailto:me@example.com');
  expect(link.textContent).toBe('me@example.com');
});

test('does nothing if the contact-email element is missing', () => {
  document.body.innerHTML = '';

  expect(() => require('../index')).not.toThrow();
});
