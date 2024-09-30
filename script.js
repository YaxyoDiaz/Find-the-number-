let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  attempts++;

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    document.getElementById('resultMessage').textContent = "Введите число от 1 до 100!";
    return;
  }

  if (userGuess < randomNumber) {
    document.getElementById('resultMessage').textContent = "Выше!";
  } else if (userGuess > randomNumber) {
    document.getElementById('resultMessage').textContent = "Меньше!";
  } else {
    document.getElementById('resultMessage').textContent = "Поздравляем! Вы угадали число.";
    document.getElementById('attemptsMessage').textContent = `Количество попыток: ${attempts}`;
  }
});