import './style/main.css';

// Built at runtime, not in the static HTML, so scrapers that don't execute JS never see the address.
const emailLink = document.getElementById('contact-email');
if (emailLink) {
  const email = `${emailLink.dataset.user}@${emailLink.dataset.domain}`;
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;
}
