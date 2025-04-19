let pomodoro = document.getElementById("pomodoro");

function startPomodoroCycle() {
  const shouldStartWork = confirm("Start 25-minute Pomodoro? (Cancel to stop)");
  
  if (!shouldStartWork) {
    alert("Pomodoro stopped.");
    return; // Exit the cycle
  }

  // Work phase (25 min)
  setTimeout(() => {
    const shouldTakeBreak = confirm("Time's up! Take a 5-minute break? (Cancel to stop)");
    
    if (!shouldTakeBreak) {
      alert("Pomodoro cycle stopped.");
      return; // Exit the cycle
    }

    // Break phase (5 min)
    setTimeout(() => {
      confirm("Break over! Ready for another Pomodoro?") && startPomodoroCycle(); // Restart the cycle
    }, 5  * 1000);
  }, 2  * 1000);
}

pomodoro.addEventListener("click", startPomodoroCycle);