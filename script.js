// Mobile menu toggle
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('mobile-open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('nav-menu');
    if (nav && menu && !nav.contains(e.target) && menu.classList.contains('mobile-open')) {
        menu.classList.remove('mobile-open');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.getElementById('nav-menu');
        if (menu && menu.classList.contains('mobile-open')) {
            menu.classList.remove('mobile-open');
        }
    });
});
