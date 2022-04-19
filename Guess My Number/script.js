let message = document.querySelector('.message');
let scoreText = document.querySelector('.score');
let guessNumberText = document.querySelector('.guess');
let highscoreText = document.querySelector('.highscore');
let buttonCheckText = document.querySelector('.check');
let randomNumberText = document.querySelector('.number');
let bodyColor = document.querySelector('body');
let score = 20;
let highscore = 0;

let randomNumber = Math.ceil(Math.random(0, 20) * 20);

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = guessNumberText.value;

  if (buttonCheckText.textContent != 'restart') {
    if (guessNumber == '') {
      message = 'not number';
    } else if (randomNumber > guessNumber) {
      message.textContent = 'Too low';
      wrongAnswer();
    } else if (randomNumber < guessNumber) {
      message.textContent = 'Too high';
      wrongAnswer();
    } else if (randomNumber == guessNumber) {
      rightAnswer();
    }
  } else {
    gameRestart();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  gameRestart();
});

function wrongAnswer() {
  --score;
  scoreText.textContent = score;
  guessNumberText.value = '';
  var audio = new Audio('sounds/wrong.mp3');
  audio.play();
}

function rightAnswer() {
  message.textContent = 'You are right';
  bodyColor.classList.add('winningColor');
  if (highscore < score) highscore = score;
  highscoreText.textContent = highscore;
  randomNumberText.textContent = randomNumber;
  buttonCheckText.textContent = 'restart';
  var audio = new Audio('sounds/right.mp3');
  audio.play();
}

function gameRestart() {
  randomNumber = Math.ceil(Math.random(0, 20) * 20);
  bodyColor.classList.remove('winningColor');
  score = 20;
  message.textContent = 'Start guessing...';
  randomNumberText.textContent = '?';
  scoreText.textContent = score;
  guessNumberText.value = '';
  buttonCheckText.textContent = 'check';
}
