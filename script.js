const sidebar = document.getElementById("sidebar");
const toggleBtn = document.querySelector(".menu-toggle");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Close sidebar when pressing Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
});
