let randomNumber = Math.floor(Math.random() * 100) +1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh")

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();


guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHigh.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      lowOrHigh.textContent = "";
      setGameOver();
    } else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHigh.textContent = "Last guess was too low!";
      } else if (userGuess > randomNumber) {
        lowOrHigh.textContent = "Last guess was too high!";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }
  
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "Start a new game!"
    document.body.append(resetButton)
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1;
  
    const resultParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resultParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  