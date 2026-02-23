// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("mobile-open");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  const nav = document.querySelector("nav");
  const menu = document.getElementById("nav-menu");
  if (
    nav &&
    menu &&
    !nav.contains(e.target) &&
    menu.classList.contains("mobile-open")
  ) {
    menu.classList.remove("mobile-open");
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function () {
    const menu = document.getElementById("nav-menu");
    if (menu && menu.classList.contains("mobile-open")) {
      menu.classList.remove("mobile-open");
    }
  });
});

// Scroll Reveal Animations
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// Trigger on load, DOMContentLoaded, and immediately
window.addEventListener("load", reveal);
document.addEventListener("DOMContentLoaded", reveal);
reveal();
