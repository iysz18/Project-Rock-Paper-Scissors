// overall variables 
let playerScore = 0;
let computerScore = 0;


// reference and add logic for each choice button 'rock', 'paper' & 'scissors'
const roundStatus = document.querySelector('#roundStatus');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');
const result = document.querySelector('#endResultContainer');

const rockChoice = document.querySelector('#rockBtn');
rockChoice.addEventListener('click', () => {
    roundStatus.textContent = playRound('rock', getComputerChoice());
    updateScore();
});

const paperChoice = document.querySelector('#paperBtn');
paperChoice.addEventListener('click', () => {
    roundStatus.textContent = playRound('paper', getComputerChoice());
    updateScore();
});

const scissorsChoice = document.querySelector('#scissorsBtn');
scissorsChoice.addEventListener('click', () => {
    roundStatus.textContent = playRound('scissors', getComputerChoice());
    updateScore();
});

function updateScore() {
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    if (playerScore === 5 || computerScore === 5) {
        result.textContent = getWinner(playerScore, computerScore);
    }
}

// get the choice for the computer
function getComputerChoice() {
    let choiceArr = ["rock", "scissors", "paper"];
    return choiceArr[Math.floor(Math.random() * choiceArr.length)];
}

// the logic for win and lose for current round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)  {
        return `Tie! ${playerSelection} & ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock")  {
                playerScore += 1;
                pScore.textContent = playerScore;
                return `You Won! ${playerSelection} beats ${computerSelection}.`;
             }
    else {
        computerScore += 1;
        cScore.textContent = computerScore;
        return `You Lost! ${computerSelection} beats ${playerSelection}.`;
    }
}


// get the winner of the current round
function getWinner(playerScore, computerScore) {
    if (playerScore === computerScore) return "Tie between player and computer, play again.";
    else if (playerScore > computerScore) {
        return `You won the game!`;
    }
    else {
        return `You lost the game!`;
    }
}