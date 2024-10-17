function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function checkVisibility() {
  const elements = document.querySelectorAll('.Expl-1, .Expl-2');
  elements.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('DOMContentLoaded', checkVisibility);
window.addEventListener('scroll', checkVisibility);