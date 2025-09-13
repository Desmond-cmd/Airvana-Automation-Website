/* ==============================
   Image Slider
   ============================== */

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const track = document.querySelector(".slider-track");

  if (!prevBtn || !nextBtn || !track) return; // Prevent errors if slider not on page

  let index = 0;

  function showSlide(n) {
    const slides = track.children;
    if (n >= slides.length) index = 0;
    else if (n < 0) index = slides.length - 1;
    else index = n;

    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Auto-slide every 5s
  setInterval(() => showSlide(index + 1), 5000);
});
