// Import all required modules for different features and UI enhancements
import { darkLightModeToggle } from "./dark-light-mode-toggle.js"; // Toggle dark/light theme
import { formHandler } from "./form-handler.js"; // Handle form submission and validation
import { iconFader } from "./icon-fader.js"; // Fade social/contact icons on hover or scroll
import { loadComponents } from "./load-components.js"; // Load HTML components dynamically
import { progressBarScrollAnimation } from "./progress-bar-scroll-animation.js"; // Animate progress bars on scroll
import { smoothScroll } from "./smooth-scroll.js"; // Enable smooth scrolling to anchor links
import { TypingEffectAnimation } from "./typing-effect-animation.js"; // Typing animation for introduction text

// Run once the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
	const includes = [
		{ id: "portfolio-navbar", file: "html-components/navbar.html" },
		{ id: "home", file: "html-components/hero.html" },
		{ id: "projects", file: "html-components/projects.html" },
		{ id: "about", file: "html-components/about.html" },
		{ id: "contact", file: "html-components/contact-form.html" },
		{ id: "education-experience-internships", file: "html-components/education-experience-internships.html" },
		{ id: "skills", file: "html-components/skills.html" },
		{ id: "contact-details", file: "html-components/contact-details.html" },
	];  

	// Dynamically load components and then initialize scripts
	loadComponents(includes, () => {
		initializePageScripts();
	});
});

// Function to initialize all interactive and visual enhancements on the page
function initializePageScripts() {
	darkLightModeToggle(); // Initialize dark/light mode toggle
	progressBarScrollAnimation(); // Start progress bar scroll animation
	formHandler(); // Attach form submit handlers
	iconFader(); // Initialize icon fade effect on hover/scroll
	smoothScroll(); // Enable smooth scrolling for in-page navigation

	// Function to initialize the typing effect based on screen size
	function initializeTyping() {
		const introLines = [
			"Frontend Developer | Backend Developer | Hindustani Classical Singer"
		];
		let introTyping;

		// Use different IDs for desktop and mobile viewports
		if (window.innerWidth > 992) {
			introTyping = new TypingEffectAnimation("introduction-desktop-ipad", introLines);
		} else {
			introTyping = new TypingEffectAnimation("introduction-mobile-mini-tablet", introLines);
		}
		introTyping.start(); // Start typing animation
	}

	initializeTyping(); // Run typing animation on initial load

	// Re-initialize typing animation on window resize with debounce
	let resizeTimer;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			initializeTyping();
		}, 300);
	});	
}
