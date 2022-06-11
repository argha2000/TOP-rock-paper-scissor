let computerPlay = () => {
  let choiceArray = ["ROCK", "PAPER", "SCISSOR"];
  const computerChoice =
    choiceArray[Math.floor(Math.random()) * choiceArray.length];
  console.log(computerChoice);
  return computerChoice;
};

let rockPaperScissor = function (playerChoice = "", computerChoice = "") {
  console.log(playerChoice);
  if (playerChoice === "ROCK") {
    if (computerChoice === "ROCK") return "Seems to be a tie! Try again!";
    else if (computerChoice === "PAPER") {
      return "You lose! Paper beats Rock!";
    } else if (computerChoice === "SCISSOR")
      return "You win! Rocks beats Paper!";
  } else if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK") return "You win! Paper beats Rock!";
    else if (computerChoice === "PAPER") {
      return "Seems to be a tie! Try again!";
    } else if (computerChoice === "SCISSOR")
      return "You lose! Scissor beats Paper!";
  } else if (playerChoice === "SCISSOR") {
    if (computerChoice === "ROCK") return "You lose!Rock beats Scissor!";
    else if (computerChoice === "PAPER") {
      return "You win! Scissor beats Paper!";
    } else if (computerChoice === "SCISSOR")
      return "Seems to be a tie! Try again!";
  }
};

function game() {
  let numberOfRounds = Number(
    prompt("Enter the no. of rounds you want to play!")
  );
  let playerChoice = prompt("Enter your choice(ROCK/PAPER/SCISSOR):");
  playerChoice = playerChoice.toUpperCase();
  console.log(playerChoice);
  for (let i = 0; i < numberOfRounds; i++) {
    let computerChoice = computerPlay();
    let winner = rockPaperScissor(playerChoice, computerChoice);
    alert(winner);
    let answer = prompt("Do you wanna continue playing?");
    if (answer.toUpperCase() !== "YES") break;
  }
}
game();
