var pomodoro = document.getElementById("pomodoro");

function pomodoroTimer() {
    var clickTime = new Date(); // Get the current date and time
    alert("Button clicked at: " + clickTime.toLocaleString());
}

// Assign the function to the onclick event
pomodoro.onclick = pomodoroTimer;
