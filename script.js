var scoreData = [0, 0];

const createElement = (tag, className = "", text, style = "") => {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  element.textContent = text;
  if (style) {
    element.setAttribute("style", style);
  }
  return element;
};

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return gameChoices[randomNumber].toLowerCase();
}

function playGame(userSelection) {
  const computerChoice = getComputerChoice();

  const userChoiceOutcome = {
    // Mapping
    rock: { scissors: "win", paper: "lose", rock: "tie" },
    scissors: { scissors: "tie", paper: "win", rock: "lose" },
    paper: { scissors: "lose", paper: "tie", rock: "win" },
  };

  const resultGame = userChoiceOutcome[userSelection][computerChoice];

  if (resultGame == "win") {
    alert("User won!");
    scoreData[0] += 1;
  } else if (resultGame == "lose") {
    alert("Computer won!");
    scoreData[1] += 1;
  } else {
    alert("Tie!");
  }

  updateDisplayingScore();
  checkWinner();
}

function updateDisplayingScore() {
  const scoreDisplay = document.querySelector(".scoreLine");
  if (!scoreDisplay) {
    const newScoreDisplay = createElement(
      "p",
      "scoreLine",
      `Human Score: ${scoreData[0]} - Computer Score: ${scoreData[1]}`
    );
    mainDiv.append(newScoreDisplay);

  } else {
    scoreDisplay.textContent = `Human Score: ${scoreData[0]} - Computer Score: ${scoreData[1]}`;
  }
}

function checkWinner() {
  if (scoreData[0] === 5) {
      announceWinner('User');
  } else if (scoreData[1] === 5) {
      announceWinner('Computer');
  }
}

function announceWinner(winner) {
  alert(`${winner} wins the game!`);
  resetGame();
}

function resetGame() {
  scoreData = [0, 0];
  updateDisplayingScore();
  displayResult('');  // Clear result display
}

const mainDiv = document.querySelector(".mainDiv");
const rockSelection = document.querySelector("#rockButton");
const paperSelection = document.querySelector("#paperButton");
const scissorsSelection = document.querySelector("#scissorsButton");

rockSelection.addEventListener("click", () => playGame("rock"));
paperSelection.addEventListener("click", () => playGame("paper"));
scissorsSelection.addEventListener("click", () => playGame("scissors"));
