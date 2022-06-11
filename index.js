let computerPlay = () => {
  let choiceArray = ["ROCK", "PAPER", "SCISSOR"];
  const computerChoice =
    choiceArray[Math.floor(Math.random()) * choiceArray.length];
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
  let numberOfRounds = prompt("Enter the no. of rounds you want to play!");
  if (!isNaN(numberOfRounds)) {
    for (let i = 0; i < Number(numberOfRounds); i++) {
      let playerChoice = prompt("Enter your choice(rock/paper/scissor)");
      playerChoice = playerChoice.toUpperCase();
      let computerChoice = computerPlay();
      let winner = rockPaperScissor(playerChoice, computerChoice);
      alert(winner);
      if (i != numberOfRounds - 1) {
        let answer = prompt("Do you wanna continue playing?(yes/no)");
        if (answer.toUpperCase() !== "YES") {
          alert("Thank you for playing!");
          break;
        }
      } else if (i == numberOfRounds - 1)
        alert("The number of rounds is over! Thank you for playing!");
    }
  } else {
    alert("Not a number! please reload the page and try again!");
  }
}
game();
