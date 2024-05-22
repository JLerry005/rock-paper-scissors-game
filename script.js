function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}


function hasPlayerWonTheRound(player, computer) {

    if ((player === "Rock" && computer === "Scissors") || 
        (player === "Scissors" && computer === "Paper") || 
        (player === "Paper" && computer === "Rock") ) {
        return true
    } else if (player == computer) {
        return false;
    } else {
        return false
    }

}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

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
            
    // if (playerScore === 3) {
    //     resetGameBtn.style.display = "block";
    //     winnerMsgElement.innerText = "Player has won the game!";
    //     optionsContainer.style.display = "none";
    // } else {
    //     winnerMsgElement.innerText = "Computer has won the game!";
    //     resetGameBtn.style.display = "block";
    //     optionsContainer.style.display = "none";
    // }

    if (playerScore === 3 || computerScore === 3 ) {
        winnerMsgElement.innerText = `${playerScore === 3 ? 'Player' : 'Computer'} has won the game!`;
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
    
};

function resetGame() {
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
    winnerMsgElement.innerText = '';
    roundResultsMsg.innerText = '';
    computerScoreSpanElement.innerText = 0;
    playerScoreSpanElement.innerText = 0;
    computerScore = 0;
    playerScore = 0;
};

resetGameBtn.addEventListener('click', resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn")

rockBtn.addEventListener('click', function () {
    showResults("Rock");
})

paperBtn.addEventListener('click', function () {
    showResults("Paper");
})

scissorsBtn.addEventListener('click', function () {
    showResults("Scissors");
})