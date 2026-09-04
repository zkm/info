import './style/main.css';
import { buildEmailAddress, parallaxOffset } from './domUtils';

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

const blobs = document.querySelectorAll('.parallax-blob');
const canHover = window.matchMedia(
  '(hover: hover) and (pointer: fine)'
).matches;
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (blobs.length && canHover && !prefersReducedMotion) {
  let ticking = false;
  let clientX = window.innerWidth / 2;
  let clientY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    clientX = event.clientX;
    clientY = event.clientY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        blobs.forEach((blob) => {
          const depth = Number(blob.dataset.depth) || 20;
          const { x, y } = parallaxOffset(
            clientX,
            clientY,
            window.innerWidth,
            window.innerHeight,
            depth
          );
          blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        ticking = false;
      });
    }
  });
}
