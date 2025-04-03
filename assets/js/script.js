document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const progressBars = document.querySelectorAll(".progress");

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "Light Mode";
        } else {
            darkModeToggle.textContent = "Dark Mode";
        }
    });
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.getAttribute("data-width");
                entry.target.style.width = targetWidth; // Animate width when visible
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    progressBars.forEach((bar) => observer.observe(bar));
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
