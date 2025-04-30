const pomodoro = document.getElementById("pomodoro");
pomodoro.addEventListener("click", async function () {
  notify("Pomodoro timer started!");
  const initialconfirm = await select("Do you want to start the pomodoro timer?");
  if (initialconfirm) {
    notify("Pomodoro timer started!");
    workingTime();
  } else {
    notify("Pomodoro cancelled! Goodbye!");
  }
});

async function workingTime() {
  setTimeout(async () => {
    const continueRest = await select("Pomodoro ended, Time to take a break!");
    if (continueRest) {
      notify("Break time started!");
      breakTime();
    } else {
      notify("Pomodoro cancelled! Goodbye!");
    }
  }, 5000);
}

async function breakTime() {
  setTimeout(async () => {
    const continueWorking = await select("Break time ended, Time to get back to work!");
    if (continueWorking) {
      notify("Back to work!");
      workingTime();
    } else {
      notify("Pomodoro cancelled! Goodbye!");
    }
  }, 5000);
}

// ======= Custom Notification (alert) =======
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

// ======= Custom Confirm (select) =======
function select(message) {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                  background: rgba(0,0,0,0.5); display: flex; justify-content: center;
                  align-items: center; z-index: 9999;" id="selectBox">
        <div style="background: white; padding: 20px; border-radius: 8px;
                    text-align: center; min-width: 250px;">
          <p>${message}</p>
          <button id="yes" style="margin: 10px;">Yes</button>
          <button id="no" style="margin: 10px;">No</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector("#yes").onclick = () => {
      modal.remove();
      resolve(true);
    };
    modal.querySelector("#no").onclick = () => {
      modal.remove();
      resolve(false);
    };
  });
}
