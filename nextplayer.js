const wScore = document.querySelector(".winning-score");

holdButton.addEventListener("click", () => {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    //console.log(scores[activePlayer]);

    if (activePlayer === 0) {
      playerScore0.textContent = scores[activePlayer];
    } else playerScore1.textContent = scores[activePlayer];

    if (scores[activePlayer] >= wScore.textContent) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      diceImg.style.display = "none";
      gamePlaying = false;
      //holdButton.style.display = "none";
      //rollButton.style.display = "none";
    } else nextPlayer();
  }
});

function nextPlayer() {
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  playerPanel0.classList.toggle("active");
  playerPanel1.classList.toggle("active");
  roundScore = 0;
  diceImg.style.display = "none";
}
