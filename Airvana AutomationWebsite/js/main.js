/* ==============================
   Main JS - Navbar + Forms
   ============================== */

// Mobile navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const toggleBtn = document.createElement("button");

  toggleBtn.innerText = "☰";
  toggleBtn.classList.add("nav-toggle");

  // Insert toggle button into navbar
  document.querySelector(".navbar").prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Contact form submit (dummy action for now)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
