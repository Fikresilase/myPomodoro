const pomodoro=document.getElementById("pomodoro");
pomodoro.addEventListener("click",function(){
  alert("Pomodoro timer started!");
})
function workingTime(){
  setTimeout(() => {
    alert("pomodoro ended, Time to take a break!");
  }, 5000);
}

function breakTime(){
  setTimeout(() => {
    alert("Break time ended, Time to get back to work!");
  }, 5000);
}