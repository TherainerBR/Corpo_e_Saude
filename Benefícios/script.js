// script.js
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null, // Usar a viewport do navegador como root
    rootMargin: "0px",
    threshold: 0.1 // 10% do elemento visível
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe 'visible' quando o elemento está no campo de visão
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden'); // Remove a classe 'hidden'
      } else {
        // Remove a classe 'visible' e adiciona a classe 'hidden' quando não está visível
        entry.target.classList.remove('visible');
        entry.target.classList.add('hidden');
      }
    });
  }, options);

  // Seleciona todos os elementos que você quer observar
  const cards = document.querySelectorAll('.description-benefits .card1, .description-benefits .card2, .description-benefits .card3, .description-benefits .card4');

  // Adiciona a classe 'hidden' inicialmente
  cards.forEach(card => {
    card.classList.add('hidden');
    observer.observe(card); // Observa cada card
  });
});


// Aguarda o carregamento completo da página
window.onload = function() {
  // Seleciona todos os elementos com a classe "fade-in"
  const fadeElements = document.querySelectorAll('.fade-in');

  // Adiciona a classe "visible" a cada elemento, acionando a transição
  fadeElements.forEach(element => {
    element.classList.add('visible');
  });
};