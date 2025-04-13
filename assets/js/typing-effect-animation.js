// Class to create a typing effect animation for multiple lines of text
export class TypingEffectAnimation {
	constructor(elementId, lines, speed = 50, pause = 500) {
		// Get the DOM element where typing will occur
		this.typingElement = document.getElementById(elementId);
		
		// Array of lines to type
		this.lines = lines;

		// Speed of typing each character in milliseconds
		this.typingSpeed = speed;

		// Pause between lines in milliseconds
		this.pause = pause;

		// Index to track the current line being typed
		this.lineIndex = 0;

		// Index to track the current character in the current line
		this.charIndex = 0;

		// Timer reference used for clearing/restarting the typing animation
		this.typingTimer = null;
	}	

	// Recursive function to type the next character or line
	typeNext() {
		if (this.lineIndex < this.lines.length) {
			// If there are still characters left in the current line
			if (this.charIndex < this.lines[this.lineIndex].length) {
				// Add the next character to the element
				this.typingElement.textContent += this.lines[this.lineIndex][this.charIndex];

				// Move to the next character
				this.charIndex++;

				// Set a timeout to type the next character
				this.typingTimer = setTimeout(() => this.typeNext(), this.typingSpeed);
			} else {
				// Once a line is fully typed, add a line break
				this.typingElement.textContent += "\n";

				// Move to the next line and reset character index
				this.lineIndex++;
				this.charIndex = 0;

				// Pause before typing the next line
				this.typingTimer = setTimeout(() => this.typeNext(), this.pause);
			}
		} else {
			// Remove the blinking cursor class once typing is complete
			this.typingElement.classList.remove("cursor");
		}
	}

	// Initialize the typing animation
	start() {
		// Check if the target element exists
		if (!this.typingElement) {
			console.error(`Element with ID "${this.elementId}" not found.`);
			return;
		}

		// Clear any existing timer in case it's restarting
		clearTimeout(this.typingTimer);

		// Clear previous text content
		this.typingElement.textContent = "";

		// Add cursor class to indicate typing is in progress
		this.typingElement.classList.add("cursor");

		// Reset line and character indices
		this.lineIndex = 0;
		this.charIndex = 0;

		// Start the typing loop
		this.typeNext();
	}
}