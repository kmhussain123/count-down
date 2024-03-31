let timer;
let seconds;

function startTimer() {
  seconds = document.getElementById('timer').value;
  if (isNaN(seconds) || seconds <= 0) {
    alert('Please enter a valid positive number for the timer.');
    return;
  }

  document.getElementById('timer').disabled = true;
  document.getElementById('display').innerText = formatTime(seconds);
  
  timer = setInterval(function () {
    seconds--;
    document.getElementById('display').innerText = formatTime(seconds);

    if (seconds <= 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById('timer').disabled = false;
}

function resetTimer() {
  stopTimer();
  document.getElementById('timer').value = '';
  document.getElementById('display').innerText = '0s';
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}
