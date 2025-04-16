document.addEventListener("DOMContentLoaded", function () {
  const initStarter = () => {
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", (e) => {
      const offScreen = document.getElementById("offScreen");
      offScreen.style.opacity = "0";
      offScreen.style.transition = "opacity 0.5s ease-in-out";
      offScreen.style.zIndex = "0";
      offScreen.style.pointerEvents = "none";
    });
  };

  const initShutDown = () => {
    const shutDownButton = document.getElementById("shutDownButton");

    shutDownButton.addEventListener("click", () => {
      const offScreen = document.getElementById("offScreen");
      offScreen.style.opacity = "1";
      offScreen.style.transition = "opacity 0.5s ease-in-out";
      offScreen.style.zIndex = "1040";
      offScreen.style.pointerEvents = "auto";
    });
  };

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
          dialog.style.zIndex = "2";
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

  const initFooterMenu = () => {
    const menuButton = document.querySelector(".menu-button");

    menuButton.addEventListener("click", (e) => {
      e.preventDefault();
      const footerMenu = document.querySelector(".footer-menu");
      if (footerMenu) {
        footerMenu.classList.toggle("open");
      }
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

  initStarter();
  initShutDown();
  initDialogs();
  initFooterMenu();
  setInterval(clock, 1000);
});
