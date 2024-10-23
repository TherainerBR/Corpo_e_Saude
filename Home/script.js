
// Script Card reveal
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


// Script carrousel image change
const intervalTime = 5000;
const carouselElement = document.querySelector('#carouselExampleCaptions');

setInterval(() => {
    const activeItem = carouselElement.querySelector('.carousel-item.active');
    const nextItem = activeItem.nextElementSibling || carouselElement.querySelector('.carousel-item:first-child');
    
    const carousel = new bootstrap.Carousel(carouselElement);
    carousel.to(Array.from(carouselElement.querySelectorAll('.carousel-item')).indexOf(nextItem));
}, intervalTime);

