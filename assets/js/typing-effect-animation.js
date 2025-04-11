export class TypingEffectAnimation {
    constructor(elementId, lines, speed = 50, pause = 500) {
        this.typingElement = document.getElementById(elementId);
        this.lines = lines;
        this.typingSpeed = speed;
        this.pause = pause;
        this.lineIndex = 0;
        this.charIndex = 0;
        this.typingTimer = null;
    }
  
    typeNext() {
      if (this.lineIndex < this.lines.length) {
            if (this.charIndex < this.lines[this.lineIndex].length) {
              this.typingElement.textContent += this.lines[this.lineIndex][this.charIndex];
              this.charIndex++;
              this.typingTimer = setTimeout(() => this.typeNext(), this.typingSpeed);
            } else {
              this.typingElement.textContent += "\n";
              this.lineIndex++;
              this.charIndex = 0;
              this.typingTimer = setTimeout(() => this.typeNext(), this.pause);
            }
      } else {
        this.typingElement.classList.remove("cursor");
      }
    }
  
    start() {
      clearTimeout(this.typingTimer);
      this.typingElement.textContent = "";
      this.typingElement.classList.add("cursor");
      this.lineIndex = 0;
      this.charIndex = 0;
      this.typeNext();
    }
  
    restartOnResize() {
      window.addEventListener("resize", () => this.start());
    }
}
  