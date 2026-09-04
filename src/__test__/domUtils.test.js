import { buildEmailAddress, parallaxOffset } from '../domUtils';

test('buildEmailAddress joins a user and domain into an email address', () => {
  expect(buildEmailAddress('me', 'zachschneider.com')).toBe(
    'me@zachschneider.com'
  );
});

test('parallaxOffset is zero at the viewport center', () => {
  expect(parallaxOffset(500, 500, 1000, 1000, 20)).toEqual({ x: 0, y: 0 });
});

test('parallaxOffset scales toward the corners by depth', () => {
  expect(parallaxOffset(1000, 1000, 1000, 1000, 20)).toEqual({ x: 10, y: 10 });
  expect(parallaxOffset(0, 0, 1000, 1000, 20)).toEqual({ x: -10, y: -10 });
});
