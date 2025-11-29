document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector("i");
  const html = document.documentElement;

  // Check saved preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    html.setAttribute("data-theme", currentTheme);
    updateIcon(currentTheme);
  }

  toggleBtn.addEventListener("click", () => {
    let theme = html.getAttribute("data-theme");

    if (theme === "light") {
      theme = "dark";
      html.removeAttribute("data-theme");
    } else {
      theme = "light";
      html.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", theme);
    updateIcon(theme);
  });

  function updateIcon(theme) {
    if (theme === "light") {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
});