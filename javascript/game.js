function getComputerChoice() {
    let choiceArr = ["rock", "scissors", "paper"];
    return choiceArr[Math.floor(Math.random() * choiceArr.length)];
}

let playerScore, computerScore;
playerScore = 0;
computerScore = 0;

function playRound(playerSelection, computerSelection) {
    // detect possible tie
    if (playerSelection === computerSelection)  {
        playerScore +=1;
        computerScore +=1;
        return "Tie detected.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock")  {
                playerScore +=1 ;
                return `You Won!${playerSelection} beats ${computerSelection}`;
             }
    else {
        computerScore += 1;
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function getWinner(playerScore, computerScore) {
    if (playerScore === computerScore) return "Tie between player and computer, play again.";
    else if (playerScore > computerScore) {
        return `You won! Score: ${playerScore} & ${computerScore}`;
    }
    else {
        return `You Lost! Score: ${computerScore} & ${playerScore}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter rock, paper or scissor:", "rock");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(getWinner(playerScore, computerScore));

}

game();