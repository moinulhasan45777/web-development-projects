'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.getElementById('message').textContent = message;
};

document.getElementById('check').addEventListener('click', function () {
  const guess = Number(document.getElementById('guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  //When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.getElementById('number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.getElementById('number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.getElementById('highscore').textContent = highScore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    //When guess is high
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.getElementById('score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.getElementById('score').textContent = 0;
    }
  }

  //Resetting the game76
  document.getElementById('again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.getElementById('score').textContent = score;
    document.getElementById('number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.getElementById('number').style.width = '15rem';
    document.getElementById('guess').value = '';
  });
});
