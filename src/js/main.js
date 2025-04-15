document.addEventListener("DOMContentLoaded", function () {
  const initDialogs = () => {
    const openButtons = document.querySelectorAll(".open-dialog");
    const closeButtons = document.querySelectorAll(".close-btn");

    openButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute("data-target");
        const dialog = document.getElementById(targetId);
        if (dialog) {
          dialog.style.display = "block";
          dialog.style.zIndex = "9999";
        }
      });
    });

    closeButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const dialog = btn.closest(".dialog-window");
        if (dialog) {
          dialog.style.display = "none";
        }
      });
    });
  };

  const clock = () => {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let meridiem;

    if (hours >= 12) {
      meridiem = " PM";
    } else {
      meridiem = " AM";
    }

    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }

    document.getElementById("clock").innerHTML =
      hours + ":" + minutes + ":" + seconds + meridiem;
  };

  initDialogs();
  setInterval(clock, 1000);
});
