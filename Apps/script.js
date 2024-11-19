// Criar um observador para observar os elementos
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Verificar se o elemento está dentro do campo de visão
    if (entry.isIntersecting) {
      // Quando o elemento entrar na tela, adicionar a classe 'visible' e remover 'hidden'
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    } else {
      // Quando o elemento sair da tela, adicionar a classe 'hidden' e remover 'visible'
      entry.target.classList.add('hidden');
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5 // Quando 50% do elemento estiver visível
});

// Selecionar todos os elementos que devem ser observados
const elements = document.querySelectorAll('.IMG-app, .Desc-App, .IMG-app-Nike, .Text-1');

// Adicionar o 'hidden' inicialmente para que eles comecem fora da tela
elements.forEach(element => {
  element.classList.add('hidden');
  observer.observe(element);
});

// Função que ajusta a transição e visibilidade do elemento
function handleVisibility(element) {
  // Ajuste o tempo da transição para quando o elemento entra ou sai
  const transitionDuration = '1.5s'; // Você pode modificar esse valor para ajustar a animação
  
  // Adiciona a classe para transição suave, com a duração ajustada
  element.style.transition = `transform ${transitionDuration} ease, opacity ${transitionDuration} ease`;
  
  // Verifica se o elemento está visível na tela
  const rect = element.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
  if (isVisible) {
    // Se o elemento estiver visível, aplica a classe 'visible' e mostra o elemento
    element.classList.add('visible');
    element.classList.remove('hidden');
  } else {
    // Se o elemento não estiver visível, aplica a classe 'hidden' e esconde o elemento
    element.classList.add('hidden');
    element.classList.remove('visible');
  }
}

// Observador de scroll para monitorar quando o usuário rolar a página
window.addEventListener('scroll', () => {
  // Seleciona todos os elementos com a classe 'app'
  const elements = document.querySelectorAll('.app');
  
  elements.forEach(element => {
    handleVisibility(element); // Chama a função para cada elemento
  });
});

// Chamada inicial para garantir que os elementos visíveis ao carregar a página sejam ajustados
document.querySelectorAll('.app').forEach(handleVisibility);


