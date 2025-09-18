// Select all sections
const sections = document.querySelectorAll("section");

// Start with sections hidden (except the first one)
sections.forEach((section, index) => {
    if (index !== 0) {
        section.classList.add("hidden");
    }
});

// Show sections on scroll
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add("visible");
            section.classList.remove("hidden");
        }
    });
});
// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Change button icon
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});