
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navigationLinks = document.querySelectorAll("#nav-links a");
const yearElement = document.querySelector("#year");

// Display the current year in the footer.
yearElement.textContent = new Date().getFullYear();

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link.
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Highlight the navigation link for the visible section.
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navigationLinks.forEach((link) => {
        const isActive =
          link.getAttribute("href") === `#${entry.target.id}`;

        if (isActive) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  },
  {
    rootMargin: "-25% 0px -60% 0px",
  }
);

sections.forEach((section) => observer.observe(section));

console.log("Developer portfolio loaded successfully!");
