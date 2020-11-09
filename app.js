let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//   UI element
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//   asine UI moin max
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter the number between ${min} and ${max}`, "red");
  }
  //   win
  if (guess === winningNum) {
    guessInput.disable = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct. YOU WIN!`, "green");
  }
  //   lost
  else {
    guessesLeft -= 1;
  }

  if (guessesLeft === 0) {
    guessInput.disable = true;
    guessInput.style.borderColor = "red";
    setMessageobject(` The correct number is ${winningNum}.YOU LOST!`, "green");
  } else {
    guessInput.style.borderColor = "red";
    guessInput.value = "";
    setMessage(`${guess} is not correct,${guessesLeft} guesses left`, "red");
  }

  //   play again
  guessBtn.value = "Play again";
  guessBtn.className += "play-again";
});

// add eventlistnere
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
