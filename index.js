const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const LS_KEY = "site-theme";
const saved = localStorage.getItem(LS_KEY);
if (saved === "light") {
  body.classList.add("light-theme");
}
if (toggleBtn) {
  toggleBtn.textContent = body.classList.contains("light-theme") ? "Dark" : "Light";
  toggleBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-theme");
    toggleBtn.textContent = isLight ? "Dark" : "Light";
    localStorage.setItem(LS_KEY, isLight ? "light" : "dark");
  });
}