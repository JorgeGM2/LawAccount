// === TOGGLE MENÚ ===
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    toggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // === AOS Animations ===
    AOS.init({
        duration: 1000,
        once: true,
    });

    // === Smooth Scroll ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({behavior: "smooth"});
                if (window.innerWidth <= 768) {
                    navbar.classList.remove("active");
                }
            }
        });
    });

    // === Form validation (simple) ===
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const name = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector("textarea");

            if (!name.value || !email.value || !message.value) {
                e.preventDefault();
                alert("Por favor, completa todos los campos.");
            }
        });
    }
});

