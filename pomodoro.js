let pomodoro = document.getElementById("pomodoro");

let popupContainer = document.getElementById("popup-container");
let countdownWrapper = document.getElementById("countdown-wrapper");
let timerDisplay = document.getElementById("timer");
let phaseLabel = document.getElementById("phase-label");

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function runCountdown(duration, phaseText, callback) {
  popupContainer.style.display = "none";
  countdownWrapper.style.display = "flex";
  phaseLabel.textContent = phaseText;

  let timeLeft = duration;
  timerDisplay.textContent = formatTime(timeLeft);

  let countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown);
      callback();
    }
  }, 1000);
}

function startPomodoroCycle() {
  const shouldStartWork = confirm("Start 25-minute Pomodoro? (Cancel to stop)");

  if (!shouldStartWork) {
    alert("Pomodoro stopped.");
    return;
  }

  runCountdown(25 * 60, "Focus Time", () => {
    const shouldTakeBreak = confirm("Time's up! Take a 5-minute break? (Cancel to stop)");
    
    if (!shouldTakeBreak) {
      alert("Pomodoro cycle stopped.");
      popupContainer.style.display = "flex";
      countdownWrapper.style.display = "none";
      return;
    }

    runCountdown(5 * 60, "Break Time", () => {
      const restart = confirm("Break over! Ready for another Pomodoro?");
      if (restart) {
        startPomodoroCycle();
      } else {
        alert("Pomodoro cycle finished.");
        popupContainer.style.display = "flex";
        countdownWrapper.style.display = "none";
      }
    });
  });
}

pomodoro.addEventListener("click", startPomodoroCycle);
