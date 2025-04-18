let pomodoro = document.getElementById("pomodoro");
pomodoro.addEventListener("click", function() {
    alert("Pomodoro clicked"); // First alert (immediately)
    
    setTimeout(function() {
        alert("Pomodoro started, time to take rest"); // After 10 seconds
        setTimeout(function() {
            alert("Up! Time to take your break"); // Another 10 seconds later (20s total)
        }, 10 * 1000); // 10 seconds after the 2nd alert
    }, 10 * 1000); // 10 seconds after the 1st alert
});