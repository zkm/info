export function buildEmailAddress(user, domain) {
  return `${user}@${domain}`;
}

export function parallaxOffset(
  clientX,
  clientY,
  viewportWidth,
  viewportHeight,
  depth
) {
  const x = (clientX / viewportWidth - 0.5) * depth;
  const y = (clientY / viewportHeight - 0.5) * depth;
  return { x, y };
}
