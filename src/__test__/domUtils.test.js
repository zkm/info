import { buildEmailAddress } from '../domUtils';

test('buildEmailAddress joins a user and domain into an email address', () => {
  expect(buildEmailAddress('me', 'zachschneider.com')).toBe(
    'me@zachschneider.com'
  );
});
