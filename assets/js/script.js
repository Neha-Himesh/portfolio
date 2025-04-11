import { darkLightModeToggle } from "./dark-light-mode-toggle.js";
import { formHandler } from "./form-handler.js";
import { iconFader } from "./icon-fader.js";
import { loadComponents } from "./load-components.js";
import { progressBarScrollAnimation } from "./progress-bar-scroll-animation.js";
import { smoothScroll } from "./smooth-scroll.js";
import { TypingEffectAnimation } from "./typing-effect-animation.js";

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

		loadComponents(includes, () => {
			initializePageScripts();
		});
});
	function initializePageScripts(){
		darkLightModeToggle();
		progressBarScrollAnimation();
		formHandler();
		iconFader();
		smoothScroll();
		const introLines = [
			"Frontend Developer | Backend Developer | Hindustani Classical Singer"
		  ];
		  
		  const introTyping = new TypingEffectAnimation("introduction", introLines);
		  introTyping.start();
		  introTyping.restartOnResize();
	}
