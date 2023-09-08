// Sử dụng Default Operator || để đặt giá trị mặc định cho Object score
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  ties: 0,
  losses: 0,
};

updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.wins++;
  } else if (result === "Tie.") {
    score.ties++;
  } else if (result === "You lose.") {
    score.losses++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  const resultElement = document.querySelector(".js-result");
  resultElement.innerHTML = result;

  const movesElement = document.querySelector(".js-moves");
  movesElement.innerHTML = `
    You
    <img src="images/${playerMove}-emoji.png" class="move-icon" />
    <img src="images/${computerMove}-emoji.png" class="move-icon" />
    Computer
  `;

  updateScoreElement();
}

function updateScoreElement() {
  const scoreElement = document.querySelector(".js-score");
  scoreElement.innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
}