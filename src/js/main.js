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

  initDialogs();
});
