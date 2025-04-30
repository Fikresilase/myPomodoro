const pomodoro=document.getElementById("pomodoro");
pomodoro.addEventListener("click",function(){
  notify("Pomodoro timer started!");
  const initialconfirm=confirm("Do you want to start the pomodoro timer?");
  if(initialconfirm==true){
  notify("Pomodoro timer started!");
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

// custom select function to replace confirm
function notify(message) {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.5); display: flex; justify-content: center;
                align-items: center; z-index: 9999;" id="notifyBox">
      <div style="background: white; padding: 20px; border-radius: 8px;
                  text-align: center; min-width: 250px;">
        <p>${message}</p>
        <button style="margin-top: 10px;">OK</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector("button").onclick = () => {
    modal.remove();
  };
}

