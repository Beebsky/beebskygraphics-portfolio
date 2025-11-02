// script.js

document.addEventListener("DOMContentLoaded", () => {
  const collage = document.querySelector(".collage-img");
  const btn = document.querySelector(".btn");

  // Subtle glowing effect loop
  let glow = 0;
  setInterval(() => {
    glow = (glow + 1) % 100;
    collage.style.boxShadow = `0 0 ${10 + (glow / 5)}px rgba(255,255,255,${0.3 + glow / 400})`;
  }, 60);

  // Smooth fade out on button click before going to campaign.html
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = btn.href;
    }, 600);
  });
});
