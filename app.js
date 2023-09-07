const rockPaperScissors = ["rock", "paper", "scissors"];
  let compWins = 0;
  let playerWins = 0;
  let result = 0;
function getComputerChoice() {
  return rockPaperScissors[Math.floor(Math.random() *3)]
}
function singleRound() {
   let playerSelection = prompt('Your choice?').toLowerCase();
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    console.log("You're even!")
  } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
    return false;
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
  } else {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    return true;
    }
 
}

function countRoundresults() {
  let roundResult = singleRound();
    if (roundResult === true) {
    playerWins += 1;
  } else if (roundResult === false) {
    compWins += 1;
  }
    if (compWins > playerWins) {
    result = 'Final result: you lost!'
 } else if (compWins === playerWins) {
  result = "Final result: it's a draw!"
 } else {
  result = "Final result: you won!"
 }
 return result;
}
 function game() {
countRoundresults()
countRoundresults()
countRoundresults()
countRoundresults()
countRoundresults()
}
console.log(game());