var pomodoro = document.getElementById("start-button");

const handleClick = (name) => {
    alert(name + " clicked\nEnjoy your session!");
};

pomodoro.onclick = () => handleClick("pomodoro");
