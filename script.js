const square = document.getElementById('square');
let positionX = 0; // Posição inicial do quadrado
const speed = 2; // Velocidade de movimento

// Função para mover o quadrado
function moveSquare() {
  positionX += speed; // Incrementa a posição
  square.style.transform = `translateX(${positionX}px)`; // Movimenta o quadrado

  // Faz o movimento ser contínuo, criando um loop
  if (positionX < window.innerWidth - square.offsetWidth) {
    requestAnimationFrame(moveSquare); // Continua movendo se não tiver atingido a borda
  }
}

// Inicia o movimento
moveSquare();
