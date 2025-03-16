let container = document.querySelector(".container");
let startButton = document.querySelector(".start-button");
let audio = new Audio("tiktok.mp3");
let letters = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Z"];
let audioTimeout;
let audioGato = new Audio("/gatoRindo.mp3");

function addLetters() {
    container.innerHTML = ""; // Limpa o container antes de renderizar
    container.classList.add("circle-container"); // Adiciona a classe para o estilo circular
    
    for (let i = 0; i < letters.length; i++) {
        let angle = (i / letters.length) * (2 * Math.PI); // Calcula a posição
        let x =50 + 40 * Math.cos(angle); // Define a posição X
        let y = 50 + 40 * Math.sin(angle); // Define a posição Y
        
        let letterElement = document.createElement("span");
        letterElement.className = "letter";
        letterElement.innerText = letters[i];
        letterElement.style.position = "absolute";
        letterElement.style.left = `${x}%`;
        letterElement.style.top = `${y}%`;
        letterElement.onclick = () => selectLetter(letters[i]);
        
        container.appendChild(letterElement);
    }
}

function selectLetter(letter) {

    letters = letters.filter(l => l !== letter); // Remove a letra do array
  
    addLetters(); // Re-renderiza as letras
}

function startMusic() {
    clearTimeout(audioTimeout); // Cancela qualquer timeout anterior
    audio.currentTime = 5; // Reinicia a música
    audio.play();
    
    audioTimeout = setTimeout(() => {
        audio.pause();
        container.innerHTML = ""
        document.body.style.background = "url('/gatorindo.jpeg')"
        audioGato.play()
        document.body.style.color = "white"
        document.body.style.fontSize = "4rem"
    }, 8000); // Para a música após 20 segundos
}

startButton.addEventListener("click", startMusic);

addLetters();
