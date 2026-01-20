// Theme Toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form (demo)
const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusText.textContent = "✅ Message Sent Successfully (Demo)";
  form.reset();

  setTimeout(() => {
    statusText.textContent = "";
  }, 2500);
});
