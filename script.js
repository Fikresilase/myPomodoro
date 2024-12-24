var pomodoro = document.getElementById("pomodoro");

function pomodoroTimer() {
    // Get the current date and time inside the function
    var pomodoroTime = new Date();
    alert("Button clicked at: " + pomodoroTime.toLocaleString());
}

// Assign the function to the onclick event
pomodoro.onclick = pomodoroTimer;
