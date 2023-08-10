// Función para obtener la elección aleatoria de la computadora
function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  // Función para convertir la elección del usuario en palabra legible
  function convertToWord(choice) {
    if (choice === 'piedra') return 'Piedra';
    if (choice === 'papel') return 'Papel';
    return 'Tijera';
  }
  
  // Función para determinar el resultado del juego
  function checkResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Es un empate!';
    } else if (
      (userChoice === 'piedra' && computerChoice === 'tijera') ||
      (userChoice === 'papel' && computerChoice === 'piedra') ||
      (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
      return '¡Ganaste!';
    } else {
      return 'Perdiste. Intenta de nuevo.';
    }
  }
  
  // Función principal para jugar el juego
  function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = checkResult(userChoice, computerChoice);
  
    document.getElementById('result').innerHTML = `
      <h3>Tu elección: ${convertToWord(userChoice)}</h3>
      <h3>Elección de la computadora: ${convertToWord(computerChoice)}</h3>
      <h3>${result}</h3>
    `;
  }
  
  
  // Evento de clic para las opciones del juego
  document.getElementById('piedra').addEventListener('click', () => playGame('piedra'));
  document.getElementById('papel').addEventListener('click', () => playGame('papel'));
  document.getElementById('tijera').addEventListener('click', () => playGame('tijera'));
  