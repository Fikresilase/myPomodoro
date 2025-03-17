const pomodoroButton = document.getElementById('pomodoro');
pomodoroButton.addEventListener('click', function () {
    // Get the current time
    const pomodoroTime = new Date();

    // Format the current time
    const formattedTime = pomodoroTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Confirm the start time
    confirm(`Pomodoro starts at ${formattedTime}. Let's Goooo!`);

    // Calculate the end time (5 seconds later)
    const nexttime = pomodoroTime.getTime() + 5000; // Add 5000 milliseconds (5 seconds)

    // Convert the timestamp back to a Date object
    const nextTimeDate = new Date(nexttime);

    // Format the end time
    const formattedNextTime = nextTimeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Confirm the end time
    confirm(`Pomodoro ends at ${formattedNextTime}. Time for a 5-minute break!`);
});