/* ==============================
   Testimonials Rotator
   ============================== */

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let i = 0;

  function showTestimonial(n) {
    testimonials.forEach((t, idx) => {
      t.style.display = idx === n ? "block" : "none";
    });
  }

  if (testimonials.length > 0) {
    showTestimonial(i);
    setInterval(() => {
      i = (i + 1) % testimonials.length;
      showTestimonial(i);
    }, 4000);
  }
});
