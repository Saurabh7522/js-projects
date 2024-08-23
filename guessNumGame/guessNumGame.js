const randomNum = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submitBtn = document.querySelector('#submit');
const prevGuesses = document.querySelector('.gusses');
const guessRemaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const resultContainer = document.querySelector('.resultContainer');
const errors = document.querySelector('.errors');
const restart = document.querySelector('.restart')
const p = document.createElement('p');

let allGuesses = [];
let numGuesses = 1;
let playGame = true;
guessRemaining.innerHTML = 10;


// playGame////////

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);

    })
};

// validation check ////////

function validateGuess(guess) {
    if (isNaN(guess)) {
        errors.innerHTML = 'please enter a valid number'
    } else if (guess < 1) {
        errors.innerHTML = 'please enter number more then 1'
    } else if (guess > 100) {
        errors.innerHTML = 'please enter number less then 100'
    } else {
        errors.innerHTML = '';
        allGuesses.push(guess)
        if (numGuesses === 10) {
            displayGuess(guess)
            displayMessage(` Game over,  random number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess);
        }
    };
};



// checkGuess//////////

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Congratulations! You guessed the number! randum number is ${randomNum}`)
        endGame();
    } else if (guess < randomNum) {
        lowOrHigh.innerHTML = 'To low!'
    } else {
        if (guess > randomNum) {
            lowOrHigh.innerHTML = 'To High!'
        }
    }
};


// displayGuesse//////////

function displayGuess(guess) {
    userInput.value = '';
    numGuesses.innerHTML += `${guess} `;
    numGuesses++;
    if(guessRemaining < 1){
        endGame();
    }
    guessRemaining.innerHTML = `${11 - numGuesses}`;
    prevGuesses.innerHTML = `( ${allGuesses} )`

  }
  

//   displayMessage//////

function displayMessage(msg) {
    lowOrHigh.innerHTML = `<h3>${msg}</h3>`;   
};



// gameEnd///////

function endGame() {
   playGame = false;
  submitBtn.disabled = true;
  userInput.disabled = true;
  submitBtn.style.backgroundColor = '#484848';
  submitBtn.style.cursor ='default';
}


// startGame///////

function startGame() {
    if (!submitBtn || !userInput || !prevGuesses || !guessRemaining || !lowOrHigh || !restart) {
        console.error('One or more elements are not defined');
        return;
    }
    
    playGame = true;
    numGuesses = 1;
    allGuesses = [];
    submitBtn.disabled = false;
    userInput.disabled = false;
    prevGuesses.innerHTML = '';
    guessRemaining.innerHTML = '10';
    lowOrHigh.innerHTML = '';
    randomNum;
    submitBtn.style.backgroundColor = '#4CAF50';
}
  
// restartGame//////

  restart.addEventListener('click', (e) => {
    e.preventDefault();
    startGame();
    errors.innerHTML = '';
  });
  
console.log(randomNum);