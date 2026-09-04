import './style/main.css';

const emailLink = document.getElementById('contact-email');
if (emailLink) {
  const email = `${emailLink.dataset.user}@${emailLink.dataset.domain}`;
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;
}
