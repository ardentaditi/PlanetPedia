document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".planet-details p");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Deactivate all tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Hide all content sections
      sections.forEach(section => section.classList.add("hidden"));

      // Show the selected section
      const targetClass = tab.getAttribute("data-tab");
      const target = document.querySelector(`.${targetClass}`);
      if (target) {
        target.classList.remove("hidden");
      }
    });
  });
});
