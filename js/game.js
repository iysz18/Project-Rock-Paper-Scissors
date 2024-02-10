function getComputerChoice() {
    let choiceArr = ["rock", "scissors", "paper"];
    return choiceArr[Math.floor(Math.random() * choiceArr.length)];
}

let playerScore, computerScore;
playerScore = 0;
computerScore = 0;



// function that determines winner of a round and returns the winner to the caller
function playRound(playerSelection, computerSelection) {
    // detect possible tie
    if (playerSelection === computerSelection)  {
        return `Tie! ${playerSelection} & ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock")  {
                playerScore += 1 ;
                return `You Won! ${playerSelection} beats ${computerSelection}.`;
             }
    else {
        computerScore += 1;
        return `You Lost! ${computerSelection} beats ${playerSelection}.`;
    }
}
// function to determine the winner of the game, also detect a tie between player and computer score
function getWinner(playerScore, computerScore) {
    if (playerScore === computerScore) return "Tie between player and computer, play again.";
    else if (playerScore > computerScore) {
        return `You won the game!`;
    }
    else {
        return `You lost the game!`;
    }
}
let computerSelection = getComputerChoice(); 
    
let rockChoice = document.querySelector("#rockBtn");
let paperChoice = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let scoreboardDiv = document.querySelector('#scoreboard');
let winnerDiv = document.querySelector('#winnerBox');

// the actual function that runs the game, a set of 5 rounds
function game() {


        rockChoice.addEventListener('click', () => {
            scoreboardDiv.textContent = playRound('rock', computerSelection);
        });
        
        paperChoice.addEventListener('click', () => {
            scoreboardDiv.textContent = playRound('paper', computerSelection);
        });
        
        scissorsBtn.addEventListener('click', () => {
        scoreboardDiv.textContent = playRound('scissors', computerSelection);
        });

        // get the winner
        winnerDiv.textContent = getWinner(playerScore, computerScore); 
}

game();