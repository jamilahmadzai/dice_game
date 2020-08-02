let scores,
  roundScore,
  activePlayer,
  currentScore0,
  currentScore1,
  playerScore0,
  playerScore1;

var gamePlaying = true;

currentScore0 = document.querySelector("#current-0");
currentScore1 = document.querySelector("#current-1");
const playerPanel0 = document.querySelector(".player-0-panel");
const playerPanel1 = document.querySelector(".player-1-panel");
const rollButton = document.querySelector(".btn-roll");
const diceImg = document.querySelector(".dice");

playerScore0 = document.getElementById("score-0");
playerScore1 = document.getElementById("score-1");

const holdButton = document.querySelector(".btn-hold");
const newGame = document.querySelector(".btn-new");

init();

diceImg.style.display = "none";

rollButton.addEventListener("click", () => {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;

    diceImg.src = "dice-" + dice + ".png";
    diceImg.style.display = "block";

    if (dice !== 1) {
      roundScore += dice;
      roundScore;

      document.querySelector(
        `#current-${activePlayer}`
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

newGame.addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  playerScore0.textContent = 0;
  playerScore1.textContent = 0;
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  holdButton.style.display = "block";
  rollButton.style.display = "block";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  gamePlaying = true;
}
