// ======= Constants =======
const workDuration = 5000; // 5 seconds (for demo)
const breakDuration = 5000; // 5 seconds (for demo)

// ======= Event Listener =======
const pomodoroButton = document.getElementById("pomodoro");
pomodoroButton.addEventListener("click", async function () {
  const confirmed = await askUser("Start the Pomodoro timer?");
  if (confirmed) {
    //notify("🎯 Pomodoro started!");
    startSession("work");
  } else {
    notify("⛔ Pomodoro cancelled!");
  }
});

// ======= Helper Functions =======
async function askUser(message) {
  return await select(message);
}

// ======= Main Flow Function =======
function startSession(sessionType) {
  if (sessionType === "work") {
    setTimeout(async () => {
      const confirmed = await askUser("🌴 Work session done! Take a break?");
      if (confirmed) {
        // notify("🌴 Break started!");
        startSession("break");
      } else {
        notify("🔕 Session ended.");
      }
    }, workDuration);
  } else if (sessionType === "break") {
    setTimeout(async () => {
      const confirmed = await askUser("☕ Break over! 🚀 Back to work?");
      if (confirmed) {
        //notify("🚀 Back to work!");
        startSession("work");
      } else {
        notify("🔕 Session ended.");
      }
    }, breakDuration);
  }
}

// ======= Custom Notification =======
function notify(message) {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="pomodoro-overlay">
      <div class="pomodoro-modal">
        <p class="pomodoro-text">${message}</p>
        <button class="pomodoro-button">OK</button>
      </div>
    </div>
  `;
  applyPomodoroStyles();
  document.body.appendChild(modal);
  modal.querySelector("button").onclick = () => {
    modal.classList.add('fade-out');
    setTimeout(() => modal.remove(), 300);
  };
}

// ======= Custom Confirm =======
function select(message) {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="pomodoro-overlay">
        <div class="pomodoro-modal">
          <p class="pomodoro-text">${message}</p>
          <div class="pomodoro-btn-group">
            <button id="yesBtn" class="pomodoro-button">Yes</button>
            <button id="noBtn" class="pomodoro-button secondary">No</button>
          </div>
        </div>
      </div>
    `;
    applyPomodoroStyles();
    document.body.appendChild(modal);

    modal.querySelector("#yesBtn").onclick = () => {
      modal.classList.add('fade-out');
      setTimeout(() => {
        modal.remove();
        resolve(true);
      }, 300);
    };

    modal.querySelector("#noBtn").onclick = () => {
      modal.classList.add('fade-out');
      setTimeout(() => {
        modal.remove();
        resolve(false);
      }, 300);
    };
  });
}

// ======= Reusable Styles =======
function applyPomodoroStyles() {
  if (document.getElementById("pomodoro-styles")) return;

  const style = document.createElement("style");
  style.id = "pomodoro-styles";
  style.innerHTML = `
    .pomodoro-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease forwards;
    }

    .pomodoro-modal {
      background: #ffffff;
      padding: 30px 24px;
      border-radius: 16px;
      width: 90%;
      max-width: 340px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      gap: 20px;
      animation: slideUp 0.4s ease forwards;
    }

    .pomodoro-text {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      color: #333;
    }

    .pomodoro-button {
      padding: 12px 20px;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      background: #4361ee;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .pomodoro-button.secondary {
      background: #f0f0f0;
      color: #444;
      border: 1px solid #ddd;
    }

    .pomodoro-button:hover {
      background: #364fc7;
    }

    .pomodoro-button.secondary:hover {
      background: #e2e2e2;
    }

    .pomodoro-btn-group {
      display: flex;
      justify-content: center;
      gap: 16px;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }

    .fade-out {
      animation: fadeOut 0.3s ease forwards;
    }

    @keyframes fadeOut {
      from { opacity: 1; }
      to   { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}
