let container = document.querySelector(".container");
let startButton = document.querySelector(".start-button");
let audio = new Audio("/tiktok.mp3");
let audioGato = new Audio("/gatoRindo.mp3");
let letters = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Z"];
let audioTimeout;

function addLetters() {
    container.innerHTML = ""; // Limpa o container antes de renderizar
    
    for (let i = 0; i < letters.length; i++) {
        container.innerHTML += `<span class="letter" onClick="selectLetter('${letters[i]}')">${letters[i]}</span>`;
    }
}

function selectLetter(letter) {
    letters = letters.filter(l => l !== letter); // Remove a letra do array
    addLetters(); // Re-renderiza as letras
    startMusic()
}
function iniciar(){
    window.location.reload()
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
    }, 10000); // Para a música após 20 segundos
}

startButton.addEventListener("click", startMusic);

addLetters();