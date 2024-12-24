var pomodoro = document.getElementById("pomodoro");

function pomodoroTimer() {
    // Get the current date and time inside the function
    var pomodoroTime = new Date();
    alert("Button clicked at: " + pomodoroTime.toLocaleString());
    setTimeout(() => {
        alert("now take a rest: " + new Date(pomodoroTime.getTime() + 1800000));
    }, 2000); // This will show the alert after 2 seconds
    
}

// Assign the function to the onclick event
pomodoro.onclick = pomodoroTimer;
