function getRandomComputerResult (){
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
}
// console.log(getRandomComputerResult());

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );

}

// console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
// console.log(hasPlayerWonTheRound("Scissors", "Rock"));

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++; // Incrementa el puntaje del jugador
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++; // Incrementa el puntaje de la computadora
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

// console.log(getRoundResults("Rock"));
// console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);


// const playerScoreSpanElement = document.getElementById("player-score");
// const computerScoreSpanElement = document.getElementById("computer-score");
// const roundResultsMsg = document.getElementById("results-msg");
    
// function showResults(userOption) {
//         // Obtener la elección aleatoria de la computadora
//         const computerResult = getRandomComputerResult();
    
//         // Obtener el resultado de la ronda
//         const resultMessage = getRoundResults(userOption, computerResult);
    
//         // Actualizar los puntajes en la interfaz
//         playerScoreSpanElement.innerText = playerScore;
//         computerScoreSpanElement.innerText = computerScore;
    
//         // Mostrar el mensaje del resultado de la ronda
//         roundResultsMsg.innerText = resultMessage;
// } 
// // Prueba de la función
// showResults("Rock");

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    if(playerScore == 3){
        winnerMsgElement.innerText = "Player has won the game!"
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";

    }else if (computerScore == 3){
        winnerMsgElement.innerText = "Computer has won the game!"
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }

};

function resetGame ( ){
    playerScoreSpanElement.innerText = "";
    computerScoreSpanElement.innerText = "";
    resetGameBtn.style.display = "none";
    optionsContainer.innerText = "";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}