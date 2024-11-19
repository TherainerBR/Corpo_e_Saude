document.getElementById('calcularBtn').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    const progressBar = document.getElementById('progress-bar');

    // Limpa classes de resultados anteriores
    resultado.className = '';
    progressBar.style.width = '0%';

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos.';
        resultado.style.color = 'red';
    } else {
        const imc = peso / (altura * altura);
        
        // Define o estilo do resultado conforme a faixa de IMC
        let progressWidth = 0;
        let progressColor = ''; // Variável para armazenar a cor

        if (imc < 18.5) {
            resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
            progressColor = '#ffc107'; // Cor amarelo
            progressWidth = 25;
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
            progressColor = '#28a745'; // Cor verde
            progressWidth = 50;
        } else if (imc >= 25 && imc < 29.9) {
            resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
            progressColor = '#fd7e14'; // Cor laranja
            progressWidth = 75;
        } else {
            resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Obesidade)`;
            progressColor = '#dc3545'; // Cor vermelha
            progressWidth = 100;
        }

        // Aplica a cor ao progresso e ao resultado
        progressBar.style.backgroundColor = progressColor;
        resultado.style.color = progressColor; // Aplica a mesma cor ao texto do resultado

        // Animação da barra de progresso
        setTimeout(() => {
            progressBar.style.width = `${progressWidth}%`;
        }, 100);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    // Seleciona todos os elementos com a classe 'fade-in'
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
});