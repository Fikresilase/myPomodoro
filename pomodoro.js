// ======= Constants =======
const workDuration = 5000; // 5 seconds (for demo)
const breakDuration = 5000; // 5 seconds (for demo)

// ======= Event Listener =======
const pomodoroButton = document.getElementById("pomodoro");
pomodoroButton.addEventListener("click", function() {
  askUser("Do you want to start the Pomodoro timer?", () => {
    alert("Pomodoro timer started!");
    startSession("work");
  });
});

// ======= Helper Functions =======
function askUser(message, onConfirm) {
  if (confirm(message)) {
    onConfirm();
  } else {
    alert("Pomodoro cancelled! Goodbye!");
  }
}

// ======= Main Flow Function =======
function startSession(sessionType) {
  if (sessionType === "work") {
    setTimeout(() => {
      askUser("Pomodoro ended. Time to take a break!", () => {
        alert("Break time started!");
        startSession("break");
      });
    }, workDuration);
  } 
  else if (sessionType === "break") {
    setTimeout(() => {
      askUser("Break time ended. Time to get back to work!", () => {
        alert("Back to work!");
        startSession("work");
      });
    }, breakDuration);
  }
}
