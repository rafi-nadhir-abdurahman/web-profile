// Aktifkan animasi AOS
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Dark mode toggle
  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
  