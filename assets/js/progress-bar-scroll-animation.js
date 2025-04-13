// Function to animate progress bars when they appear in the viewport
export function progressBarScrollAnimation() {
    // Select all elements with the class 'progress'
    const progressBars = document.querySelectorAll(".progress");

    // Create a new IntersectionObserver to watch when elements become visible in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Get the class name to be added from the 'data-name' attribute
            const className = entry.target.getAttribute("data-name");

            if (entry.isIntersecting) {
                // If the element is at least 50% visible, add the class to animate it
                entry.target.classList.add(className);
            } else {
                // If the element is no longer visible, remove the animation class if it exists
                if (entry.target.classList.contains(className)) {
                    entry.target.classList.remove(className);
                }
            }
        });
    }, { threshold: 0.5 }); // Trigger the observer when 50% of the element is visible

    // Observe each progress bar element
    progressBars.forEach((bar) => observer.observe(bar));
}