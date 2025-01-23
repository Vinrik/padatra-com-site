// main.js

// 1. "Begin Your Journey" button click
document.addEventListener("DOMContentLoaded", () => {
  const journeyBtn = document.getElementById("begin-journey-btn");
  if (journeyBtn) {
    journeyBtn.addEventListener("click", () => {
      // Navigate to whichever page you like, e.g., a "timeline.html"
      // or the first culture page "cultures/japan.html"
      window.location.href = "cultures/japan.html";
    });
  }
});

// 2. Footprint Effect on Click
document.addEventListener("click", (event) => {
  // Create a new footprint element
  const footprint = document.createElement("div");
  footprint.classList.add("footprint");

  // Position it where the user clicked
  footprint.style.left = event.pageX + "px";
  footprint.style.top = event.pageY + "px";

  // Append to body
  document.body.appendChild(footprint);

  // Fade out after some time
  setTimeout(() => {
    footprint.style.opacity = 0;
  }, 1000); // start fade-out after 1 second

  // Remove from DOM after animation completes
  setTimeout(() => {
    if (footprint.parentNode) {
      footprint.parentNode.removeChild(footprint);
    }
  }, 2000); // total time footprint stays on screen
});

