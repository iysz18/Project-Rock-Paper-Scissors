function getComputerChoice() {
    let choiceArr = ["rock", "scissors", "paper"];
    return choiceArr[Math.floor(Math.random() * choiceArr.length)];
}

let playerScore, computerScore;
playerScore = 0;
computerScore = 0;

// new implementation
const rockChoice = document.querySelector("#rockBtn");
const paperChoice = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

rockChoice.addEventListener('click', () => {

});

paperChoice.addEventListener('click', () => {

});

scissorBtn.addEventListener('click', () => {

});
// end of new implementaiton

// function that determines winner of a round and returns the winner to the caller
function playRound(playerSelection, computerSelection) {
    // detect possible tie
    if (playerSelection === computerSelection)  {
       /*  playerScore +=1;
        computerScore +=1; */
        return `Tie! ${playerSelection} & ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock")  {
                playerScore +=1 ;
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

// the actual function that runs the game, a set of 5 rounds
function game() {
    //
}

game();