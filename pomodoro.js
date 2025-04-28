const pomodoro=document.getElementById("pomodoro");
pomodoro.addEventListener("click",function(){
  alert("Pomodoro timer started!");
  const initialconfirm=confirm("Do you want to start the pomodoro timer?");
  if(initialconfirm==true){
    alert("Pomodoro timer started!");
    workingTime();
  }
  else{
    alert("Pomodoro cancelled! Goodbye!");
  }
})
function workingTime(){
  setTimeout(() => {
    const continueRest=confirm("pomodoro ended, Time to take a break!");
    if(continueRest==true){
      alert("Break time started!");
      breakTime();
    }
    else{
      alert("Pomodoro cancelled! Goodbye!");
    }
  }, 5000);
}

function breakTime(){
  setTimeout(() => {
    const continueWorking=confirm("Break time ended, Time to get back to work!");
    if(continueWorking==true){
      alert("Back to work!");
      workingTime();
    }
    else{
      alert("Pomodoro cancelled! Goodbye!");
    }
  }, 5000);
}