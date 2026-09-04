import './style/main.css';
import { buildEmailAddress } from './domUtils';

// Built at runtime, not in the static HTML, so scrapers that don't execute JS never see the address.
const emailLink = document.getElementById('contact-email');
if (emailLink) {
  const email = buildEmailAddress(
    emailLink.dataset.user,
    emailLink.dataset.domain
  );
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;
}
