export function progressBarScrollAnimation(){
    const progressBars = document.querySelectorAll(".progress");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const className = entry.target.getAttribute("data-name");
            if (entry.isIntersecting) {
                entry.target.classList.add(className); // Animate width when visible
            } else {
                if (entry.target.classList.contains(className)) {
                    entry.target.classList.remove(className);
                }
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    progressBars.forEach((bar) => observer.observe(bar));
}
   